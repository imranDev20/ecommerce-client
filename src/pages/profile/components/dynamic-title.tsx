import { PROFILE_ITEMS } from "@/shared/constants/constants";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

/**
 * A dynamic title component that displays the title and icon based on the current route.
 *
 * This component fetches the current route from the router and matches it with the corresponding
 * profile item in the PROFILE_ITEMS array. It then displays the title and icon associated with the route.
 *
 * @component
 * @returns {JSX.Element | null} - The rendered dynamic title component or null if no match is found.
 */

export default function DynamicTitle(): JSX.Element | null {
  const router = useRouter();

  const currentRoute = PROFILE_ITEMS.find((item) =>
    item.route === ""
      ? router.pathname === "/profile"
      : router.pathname === "/profile/" + item.route
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 3,
      }}
    >
      {currentRoute && currentRoute.icon && (
        <currentRoute.icon
          sx={{
            fontSize: 28,
            color: "primary.main",
            mr: 1,
          }}
        />
      )}
      <Typography component="h2" variant="h5" fontWeight={600}>
        {currentRoute?.name}
      </Typography>
    </Box>
  );
}
