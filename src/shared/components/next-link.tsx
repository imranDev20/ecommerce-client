import { Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { NextLinkProps } from "../types/global";

/**
 * Wraps the Next.js Link component with MUI's Link styling.
 *
 * This component provides a convenient way to create links with MUI styling
 * while using Next.js's Link component for optimal client-side navigation.
 *
 * @component
 * @param {React.ReactNode} props.children - The content to be wrapped by the link.
 * @param {string} props.href - The URL to navigate to.
 * @returns {JSX.Element} - The rendered link.
 *
 * @example
 * // Wrap content with a styled link to the "/about" page
 * <NextLink href="/about">About Us</NextLink>
 */

export default function NextLink({
  children,
  href,
  ...props
}: NextLinkProps): JSX.Element {
  return (
    <MuiLink
      sx={{
        color: "text.primary",
      }}
      component={Link}
      underline="none"
      href={href}
      {...props}
    >
      {children}
    </MuiLink>
  );
}
