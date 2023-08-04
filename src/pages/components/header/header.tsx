import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {
  Badge,
  Container,
  Slide,
  Stack,
  useScrollTrigger,
} from "@mui/material";

import { DRAWER_WIDTH as drawerWidth } from "@/shared/constants/constants";
import { ChildrenElement } from "@/shared/types/globalTypes";
import SearchField from "./search-field";

type Props = {
  handleDrawerToggle: () => void;
};

export default function Header({ handleDrawerToggle }: Props) {
  function HideOnScroll(props: ChildrenElement) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>,
      {
        sx: {
          boxShadow: trigger ? "rgba(43, 52, 69, 0.1) 0px 4px 16px" : "none",
        },
      }
    );
  }

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Container>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Toolbar
                disableGutters
                sx={{
                  justifyContent: "space-between",
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

                <Box>Complete Ecommerce</Box>

                {/* Flex Grow of 1 on paper is making it full width */}
                <SearchField />

                <Stack direction="row" spacing={3}>
                  <IconButton sx={{ backgroundColor: "#F3F5F9", p: 1.3 }}>
                    <PersonOutlineOutlinedIcon />
                  </IconButton>
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

              <Box></Box>
            </Box>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
