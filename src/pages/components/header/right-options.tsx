import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Container,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useSignOut } from "react-firebase-hooks/auth";
import { DarkMode, Favorite, Logout, Person } from "@mui/icons-material";
import Link from "next/link";
import DynamicDialog from "@/shared/components/dynamic-dialog";
import SignIn from "../sign-in";
import DynamicDrawer from "@/shared/components/dynamic-drawer";
import Cart from "../cart";
import NextLink from "@/shared/components/next-link";
import { auth } from "@/shared/configs/auth";
import { removeToken } from "@/shared/utils/functions";
import { useGetLoggedInUserQuery } from "@/shared/redux/api/endpoints/users";
import { useAppDispatch } from "@/shared/redux/hooks";
import { api } from "@/shared/redux/api/apiSlice";

export default function RightOptions() {
  const [cartDrawerOpen, setCartDrawerOpen] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();

  const [signOut] = useSignOut(auth);

  const { data: user, isLoading } = useGetLoggedInUserQuery();

  const menuOpen = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setCartDrawerOpen(!cartDrawerOpen);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleLogout = async () => {
    const success = await signOut();

    if (success) {
      dispatch(api.util.resetApiState());
      removeToken();
      handleMenuClose();
    }
  };
  return (
    <>
      <Stack direction="row" spacing={3}>
        {user && !isLoading && (
          <IconButton
            sx={{ backgroundColor: "#F3F5F9", p: 1.3 }}
            onClick={handleMenuClick}
          >
            <PersonOutlineOutlinedIcon />
          </IconButton>
        )}

        {(!user || isLoading) && (
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

      {user && !isLoading && (
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={menuOpen}
          onClose={handleMenuClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,

              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Avatar sx={{ width: 45, height: 45, mr: 2 }}>J</Avatar>
            <Box>
              <Typography
                sx={{
                  fontWeight: 500,
                }}
              >
                {user?.firstName} {user?.lastName}
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                }}
                color="text.primary"
              >
                {user?.email}
              </Typography>
            </Box>
          </MenuItem>
          <Divider />

          <NextLink href="/profile">
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <Person fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
          </NextLink>

          <NextLink href="/profile/wishlist">
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <Favorite fontSize="small" />
              </ListItemIcon>
              Wish List
            </MenuItem>
          </NextLink>

          <ListItem
            dense
            secondaryAction={<Switch edge="end" />}
            disablePadding
          >
            <ListItemButton
              sx={{
                py: 0.25,
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <DarkMode fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "1rem" }}>Appearance</Typography>
                }
              />
            </ListItemButton>
          </ListItem>

          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      )}

      <DynamicDrawer
        anchor="right"
        mobileOpen={cartDrawerOpen}
        handleDrawerToggle={handleDrawerToggle}
      >
        <Cart />
      </DynamicDrawer>

      <DynamicDialog
        open={dialogOpen}
        content={
          <Container
            maxWidth="xs"
            sx={{
              marginTop: 4,
            }}
          >
            <SignIn handleDialogClose={handleDialogClose} isInsideDialog />
          </Container>
        }
        isAction={false}
        handleClose={handleDialogClose}
      />
    </>
  );
}
