import { cloneElement, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import {
  Container,
  Slide,
  Stack,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { ChildrenElement } from "@/shared/types/global";
import SearchField from "./search-field";
import NextLink from "@/shared/components/next-link";
import { HEADER_LINKS } from "@/shared/configs/constants";
import RightOptions from "./right-options";

export default function Header() {
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

              <RightOptions />
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
                <RightOptions />
              </Toolbar>
            </Box>
          </Container>
        </AppBar>
      </HideOnScroll>
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
