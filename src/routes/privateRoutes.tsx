import { Jobs } from "../common/pages/privatePages/jobs/jobs";
import { PrivateHome } from "../common/pages/privatePages/privateHome/privateHome";
import { PrivateLayout } from "../layout/privateLayout/privateLayout";
import { Routes, Route, Navigate } from "react-router";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path="home" element={<PrivateHome />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="login" element={<Navigate to="home" />} />
        <Route path="sign-up" element={<Navigate to="home" />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Route>
    </Routes>
  );
};
