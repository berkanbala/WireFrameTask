import { PublicRoutes } from "./publicRoutes";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./privateRoutes";
import { PrivateRoutesGuard } from "./privateRoutesGuard";

export const AuthGuard = () => {
  const accessToken = window.localStorage.getItem("accessToken");
  const refreshToken = window.localStorage.getItem("refreshToken");

  if (!accessToken || !refreshToken) {
    return (
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route element={<PrivateRoutesGuard />}>
        <Route path="/*" element={<PrivateRoutes />} />
      </Route>
    </Routes>
  );
};
