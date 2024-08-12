import { PublicRoutes } from "./publicRoutes";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./privateRoutes";
import { PrivateRoutesGuard } from "./privateRoutesGuard";

export const AuthGuard = () => {
  const accessToken = window.localStorage.getItem("accessToken");
  // Tarayıcının localStorage'ında "accessToken" anahtarıyla saklanan değeri alır.
  // Bu değer, accessToken değişkenine atanır. Eğer böyle bir anahtar yoksa, bu değişken null olur.
  const refreshToken = window.localStorage.getItem("refreshToken");
  // Aynı şekilde, localStorage'da "refreshToken" anahtarıyla saklanan değeri alır ve
  // bu değeri refreshToken değişkenine atar. Eğer bu anahtara karşılık gelen bir değer yoksa, bu da null döner.

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
