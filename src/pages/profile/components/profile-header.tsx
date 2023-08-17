import { PROFILE_ITEMS } from "@/shared/configs/constants";
import { ProfileHeaderProps } from "@/shared/types/global";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function ProfileHeader({
  children,
  icon: Icon,
  title,
}: ProfileHeaderProps) {
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
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {Icon ? (
          <Icon
            sx={{
              fontSize: 28,
              color: "primary.main",
              mr: 1,
            }}
          />
        ) : (
          currentRoute?.icon && (
            <currentRoute.icon
              sx={{
                fontSize: 28,
                color: "primary.main",
                mr: 1,
              }}
            />
          )
        )}
        <Typography component="h2" variant="h5" fontWeight={700}>
          {title ? title : currentRoute?.name}
        </Typography>
      </Box>

      {children}
    </Box>
  );
}
