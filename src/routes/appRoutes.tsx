import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthGuard } from "./authGuard";

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
