import * as React from "react";
import Box from "@mui/material/Box";
import { ChildrenNode } from "@/shared/types/global";
import { DRAWER_WIDTH as drawerWidth } from "@/shared/configs/constants";
import Header from "./header/header";
import DynamicDrawer from "@/shared/components/dynamic-drawer";
import Cart from "./cart";

/**
 * The root layout component that wraps the main content of the application.
 *
 * This layout provides a responsive side drawer navigation and a flexible main content area.
 * It includes a toggle button to open/close the side drawer on mobile devices.
 *
 * @component
 * @param {ChildrenNode} props - The component props.
 * @param {React.ReactNode} props.children - The content to be wrapped by the layout.
 * @returns {JSX.Element} - The rendered root layout.
 */

export default function RootLayout({ children }: ChildrenNode): JSX.Element {
  return (
    <>
      <Header />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      </Box>
      <Box component="main">{children}</Box>
    </>
  );
}
