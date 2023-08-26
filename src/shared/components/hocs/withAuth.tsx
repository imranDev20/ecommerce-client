import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import { useGetLoggedInUserQuery } from "@/shared/redux/api/endpoints/users";
import { Box, CircularProgress } from "@mui/material";

type ComponentType = React.ComponentType<any>;

export default function withAuth(Component: ComponentType) {
  return function ProtectedRoute({ ...props }) {
    const { data: user, isLoading } = useGetLoggedInUserQuery();
    const router = useRouter();
    const intendedPath = router.asPath;

    useEffect(() => {
      if (!isLoading && !user) {
        Router.push(`/signin?redirect=${encodeURIComponent(intendedPath)}`);
      }
    }, [isLoading, user, intendedPath]);

    if (!user) {
      return (
        <Box
          sx={{
            height: "70vh",
            minHeight: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      );
    }

    return <Component {...props} />;
  };
}
