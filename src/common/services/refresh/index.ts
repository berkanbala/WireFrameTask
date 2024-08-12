import { wireFrameApiClient } from "@common/clients/wireFrameClient";

export const refresh = async () => {
  const refreshToken = window.localStorage.getItem("refreshToken");
  // refreshToken, kullanıcının oturumunu yenilemek için kullanılan bir jetondur. Tarayıcıda ki yerel depolama alanında saklanan refreshToken'ı alır.
  window.localStorage.clear();
  // yerel depolamada saklanan tüm verileri siler.

  if (!refreshToken) {
    // Eğer refreshToken yoksa (yani kullanıcı oturumunu yenilemek için gerekli jeton bulunamazsa)
    window.location.href = "/";
    //kullanıcı ana sayfaya yönlendirilir ve fonksiyon sonlandırılır.
    return;
  }

  try {
    const response = await wireFrameApiClient.post("refresh", { refreshToken });
    // burada API'ye bir POST isteği gönderilir. Bu istek, sunucuya refreshToken'ı göndererek yeni bir erişim jetonu (accessToken) ve yenileme jetonu (refreshToken) almayı amaçlar.
    wireFrameApiClient.defaults.headers["Authorization"] =
      `Bearer ${response.data.accessToken}`;
    window.localStorage.setItem("accessToken", response.data.accessToken);
    window.localStorage.setItem("refreshToken", response.data.refreshToken);
    // Eğer istek başarılı olursa, alınan yeni erişim jetonu (accessToken) ve yenileme jetonu (refreshToken) yerel depolama alanına kaydedilir.
  } catch (error) {
    window.location.href = "/";
    // kullanıcı ana sayfaya yönlendirilir.
    return;
  }
  window.location.reload();
  // Son olarak, sayfa yeniden yüklenir ve yeni token'lar kullanılarak kullanıcı oturumu yenilenmiş olur.
};
