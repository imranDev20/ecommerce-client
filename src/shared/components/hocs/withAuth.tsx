import { useEffect } from "react";
import Router from "next/router";
import { useGetLoggedInUserQuery } from "@/shared/redux/api/usersApiSlice";

type ComponentType = React.ComponentType<any>;

export default function withAuth(Component: ComponentType) {
  return function ProtectedRoute({ ...props }) {
    const { data: user, isLoading, isFetching } = useGetLoggedInUserQuery();

    useEffect(() => {
      if (!isLoading && !user) {
        Router.push("/signin");
      }
    }, [isLoading, user]);

    return <Component {...props} />;
  };
}
