import axios from "axios";
import { refresh } from "../services/refresh";

const createApiClient = (options: { baseUrl: string }) => {
  // Bu fonksiyon, belirli seçenekler alarak (örneğin, baseUrl) bir API istemcisi oluşturur.
  if (!options?.baseUrl) {
    // Eğer options.baseUrl tanımlı değilse, konsola bir uyarı mesajı basılır.
    console.warn("cannot find appConfig baseUrl");
  }

  const accessToken = window.localStorage.getItem("accessToken") ?? undefined;
  // Kullanıcının tarayıcısında (localStorage) saklanan accessToken (erişim belirteci) alınır ve Authorization başlığına eklenir.

  const apiClient = axios.create({
    baseURL: options.baseUrl,
    // baseURL: İsteklerin yapılacağı temel URL.
    headers: {
      // headers: HTTP başlıkları, bu başlıklar arasında CORS ayarları, içerik tipi ve yetkilendirme bilgileri bulunur.
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  apiClient.interceptors.request.use(
    // İstek yapılmadan önce çalışır.
    async (config: any) => {
      return config;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );

  apiClient.interceptors.response.use(
    // Yanıt alındıktan sonra çalışır.
    async (response) => {
      return response;
    },
    async (error: any) => {
      // Hata durumunda ise hata koduna göre işlem yapılır:
      switch (error.response.status) {
        case 400:
          // 400: İstek geçersiz olduğunda hata geri döndürülür.
          return Promise.reject(error);
        case 401:
          // 401: Yetkilendirme hatası oluşursa, refresh() fonksiyonu çağrılır ve hata geri döndürülür.
          await refresh();
          return Promise.reject(error);
        case 404:
          // 404: İstek yapılan kaynak bulunamazsa hata geri döndürülür.
          return Promise.reject(error);
        case 500:
          // 500: Sunucu hatası oluşursa hata geri döndürülür.
          return Promise.reject(error);
        default:
          // Diğer Durumlar: Diğer tüm hata durumlarında da hata geri döndürülür.
          return Promise.reject(error);
      }
    }
  );

  return apiClient;
};

const createWireFrameClient = () => {
  return createApiClient({ baseUrl: import.meta.env.VITE_APP_API_URL! });
  // Bu fonksiyon, önceden tanımlanmış bir baseUrl (çevresel değişken VITE_APP_API_URL ile belirtilmiş) ile bir API istemcisi oluşturur.
};

export const wireFrameApiClient = createWireFrameClient();
// Bu, createWireFrameClient fonksiyonu çağrılarak oluşturulmuş ve dışa aktarılmış olan API istemcisidir. Bu istemci, uygulama boyunca HTTP isteklerini yapmak için kullanılabilir.
