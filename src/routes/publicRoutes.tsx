import { Routes, Route, Navigate } from "react-router";
import { Login } from "../common/modals/login/login";
import { SignUp } from "../common/modals/signUp/signUp";
import { PublicLayout } from "../layout/publicLayout/publicLayout";
import { PublicHome } from "../common/pages/publicPages/publicHome/publicHome";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="home" element={<PublicHome />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Route>
    </Routes>
  );
};
