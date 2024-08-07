import { AuthGuard } from "./authGuard";
import { ToastContainer } from "react-toastify";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AuthGuard />} />
      </Routes>
      <ToastContainer theme="colored" />
    </Router>
  );
};
