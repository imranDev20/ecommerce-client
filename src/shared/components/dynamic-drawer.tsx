import { Drawer } from "@mui/material";
import { DynamicDrawerProps } from "../types/global";
import { DRAWER_WIDTH } from "../configs/constants";

export default function DynamicDrawer({
  anchor,
  drawerOpen,
  handleDrawerToggle,
  children,
  drawerWidth,
}: DynamicDrawerProps) {
  return (
    <Drawer
      variant="temporary"
      anchor={anchor}
      open={drawerOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        height: "100%",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth ? drawerWidth : DRAWER_WIDTH,
          height: "100%",
        },
      }}
    >
      {children}
    </Drawer>
  );
}
