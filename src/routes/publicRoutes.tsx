import { PublicHome } from "../common/pages/publicPages/publicHome/publicHome";
import { PublicLayout } from "../layout/publicLayout/publicLayout";
import { Routes, Route, Navigate } from "react-router";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="home" element={<PublicHome />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Route>
    </Routes>
  );
};
