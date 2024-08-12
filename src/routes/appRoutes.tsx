import { AuthGuard } from "./authGuard";
import { ToastContainer } from "react-toastify";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Router>
      {/* Router bileşeni, uygulamanın yönlendirme sisteminin temelini oluşturur. */}
      <Routes>
        {/* Routes bileşeni, içindeki Route bileşenleri arasında seçim yapar ve hangi bileşenin render edileceğini belirler. */}
        <Route path="/*" element={<AuthGuard />} />
      </Routes>
      <ToastContainer theme="colored" />
    </Router>
  );
};
