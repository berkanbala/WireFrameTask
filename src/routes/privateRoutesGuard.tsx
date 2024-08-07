import { Outlet } from "react-router";
import { Loading } from "../common/components/ui/loading/loading";
import { useAppContext } from "../common/context/appContext";
import { getUserProfile } from "../common/services/user";
import { useEffect, useState } from "react";

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
        auth.setUserInfo({ ...auth.userInfo, user: response });
      } catch (error) {
        console.warn(error);
      } finally {
        setLoading(true);
      }
    };

    handleGetUser();
  }, []);

  if (!loading) {
    return <Loading />;
  }

  return <Outlet />;
};
