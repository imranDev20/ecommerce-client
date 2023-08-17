import { useEffect } from "react";
import Router from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../configs/auth";

const useNavigation = (pathname: string) => {
  const [gUser, loading] = useAuthState(auth);

  useEffect(() => {
    if (!gUser && !loading) {
      Router.push(
        {
          pathname: "/login",
        },
        undefined,
        { shallow: false }
      );

      return;
    }

    if (!gUser?.email) {
      console.log("User email not found");
      return;
    }

    Router.push(
      {
        pathname: pathname,
        query: { email: gUser?.email },
      },
      pathname,
      { shallow: false }
    );

    console.log(gUser);
  }, [gUser, loading, pathname]);
};

export default useNavigation;
