import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getUserProfile } from "../common/services/user";
import { useAppContext } from "../common/context/appContext";

export const PrivateRoutesGuard = () => {
  const { auth } = useAppContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleGetUser = async () => {
      try {
        const response = await getUserProfile();
        if (!response) {
          window.localStorage.clear();
          window.location.href = "/";
          return;
        }
        auth.setUser(response);
      } catch (error) {
        console.warn(error);
      } finally {
        setLoading(true);
      }
    };

    handleGetUser();
  }, []);

  if (!loading) {
    return <div>loading</div>;
  }

  return <Outlet />;
};
