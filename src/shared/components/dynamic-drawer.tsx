import { Drawer } from "@mui/material";
import { DynamicDrawerProps } from "../types/global";
import { DRAWER_WIDTH } from "../configs/constants";

export default function DynamicDrawer({
  anchor,
  mobileOpen,
  handleDrawerToggle,
  children,
}: DynamicDrawerProps) {
  return (
    <Drawer
      variant="temporary"
      anchor={anchor}
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: DRAWER_WIDTH,
        },
      }}
    >
      {children}
    </Drawer>
  );
}
