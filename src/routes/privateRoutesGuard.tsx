import { useEffect, useState } from "react";
import { Outlet } from "react-router";

export const PrivateRoutesGuard = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleGetUser = () => {
      try {
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
