import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import {
  Badge,
  CircularProgress,
  Container,
  Slide,
  Stack,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { ChildrenElement } from "@/shared/types/global";
import SearchField from "./search-field";
import NextLink from "@/shared/components/next-link";
import { HEADER_LINKS } from "@/shared/configs/constants";
import { cloneElement, useEffect, useState } from "react";
import DynamicDialog from "@/shared/components/dynamic-dialog";
import Link from "next/link";
import SignIn from "../sign-in";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/shared/configs/auth";
import { useRouter } from "next/router";

type Props = {
  handleDrawerToggle: () => void;
};

export default function Header({ handleDrawerToggle }: Props) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleProfileClick = () => {
    if (!user) {
      console.log("user not found");
      return;
    }

    const email = user.email as string;

    router.push(
      {
        pathname: "/profile",
        query: { email: email },
      },
      "/profile"
    );
  };

  return (
    <>
      <AppBar position="static" color="inherit" elevation={0}>
        <Container>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Toolbar
              disableGutters
              sx={{
                justifyContent: "space-between",
                py: 2,
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <NextLink href="/">
                <Box
                  sx={{ display: "flex", fontSize: 18, alignItems: "center" }}
                >
                  <ShoppingCartIcon
                    sx={{
                      mr: 1,
                      color: "primary.main",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: "text.primary",
                    }}
                    component="h1"
                    variant="h6"
                  >
                    E-Commerce
                  </Typography>
                </Box>
              </NextLink>

              {/* Flex Grow of 1 on paper is making it full width */}
              <SearchField />

              <Stack direction="row" spacing={3}>
                {!user && loading && <CircularProgress size={44} />}

                {user && !loading && (
                  <IconButton
                    // LinkComponent={Link}
                    // href="/profile"
                    onClick={handleProfileClick}
                    sx={{ backgroundColor: "#F3F5F9", p: 1.3 }}
                  >
                    <PersonOutlineOutlinedIcon />
                  </IconButton>
                )}

                {!user && !loading && (
                  <IconButton
                    LinkComponent={Link}
                    sx={{ backgroundColor: "#F3F5F9", p: 1.3 }}
                    onClick={() => setDialogOpen(true)}
                  >
                    <LoginRoundedIcon />
                  </IconButton>
                )}

                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  badgeContent={
                    <Box
                      sx={{
                        backgroundColor: "primary.main",
                        color: "white",
                        p: 0.5,
                        width: 20,
                        height: 20,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 1200,
                        fontSize: 11,
                      }}
                    >
                      11
                    </Box>
                  }
                >
                  <IconButton
                    onClick={handleDrawerToggle}
                    sx={{
                      backgroundColor: "#f3f5f9",
                      p: 1.3,
                    }}
                  >
                    <ShoppingBagOutlinedIcon />
                  </IconButton>
                </Badge>
              </Stack>
            </Toolbar>

            <Stack
              direction="row"
              justifyContent="flex-end"
              spacing={5}
              sx={{ py: 2 }}
            >
              {HEADER_LINKS.map((option) => (
                <NextLink key={option.id} href={option.route}>
                  <Typography sx={{ fontSize: 15 }}>{option.name}</Typography>
                </NextLink>
              ))}
            </Stack>
          </Box>
        </Container>
      </AppBar>

      <HideOnScroll>
        <AppBar position="fixed" color="inherit" elevation={0} sx={{}}>
          <Container>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Toolbar
                disableGutters
                sx={{
                  justifyContent: "space-between",
                  py: 2,
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>

                <NextLink href="/">
                  <Box
                    sx={{ display: "flex", fontSize: 18, alignItems: "center" }}
                  >
                    <ShoppingCartIcon
                      sx={{
                        mr: 1,
                        color: "primary.main",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: "text.primary",
                      }}
                      component="h1"
                      variant="h6"
                    >
                      E-Commerce
                    </Typography>
                  </Box>
                </NextLink>

                {/* Flex Grow of 1 on paper is making it full width  */}
                <SearchField />

                <Stack direction="row" spacing={3}>
                  <NextLink href="/profile">
                    <IconButton sx={{ backgroundColor: "#F3F5F9", p: 1.3 }}>
                      <PersonOutlineOutlinedIcon />
                    </IconButton>
                  </NextLink>

                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    badgeContent={
                      <Box
                        sx={{
                          backgroundColor: "primary.main",
                          color: "white",
                          p: 0.5,
                          width: 20,
                          height: 20,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 1200,
                          fontSize: 11,
                        }}
                      >
                        11
                      </Box>
                    }
                  >
                    <IconButton
                      sx={{
                        backgroundColor: "#f3f5f9",
                        p: 1.3,
                      }}
                    >
                      <ShoppingBagOutlinedIcon />
                    </IconButton>
                  </Badge>
                </Stack>
              </Toolbar>
            </Box>
          </Container>
        </AppBar>
      </HideOnScroll>

      <DynamicDialog
        open={dialogOpen}
        content={<SignIn handleDialogClose={handleDialogClose} />}
        isAction={false}
        handleClose={handleDialogClose}
      />
    </>
  );
}

function HideOnScroll(props: ChildrenElement) {
  const { children } = props;
  const [scrolled, setScrolled] = useState(false);

  const trigger2 = useScrollTrigger({
    disableHysteresis: true,
    threshold: 600,
  });

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return cloneElement(
    <Slide appear={false} direction="down" in={scrolled}>
      {children}
    </Slide>,
    {
      sx: {
        boxShadow: trigger2 ? "rgba(43, 52, 69, 0.1) 0px 4px 16px" : "none",
      },
    }
  );
}
