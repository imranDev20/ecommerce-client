import { auth } from "@/shared/config/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

type ComponentType = React.ComponentType<any>;

export default function withAuth(Component: ComponentType) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
      if (!loading && !user) {
        router.push("/signin");
      }
    }, [loading, user, router]);

    return <Component {...props} />;
  };
}
