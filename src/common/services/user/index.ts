import { wireFrameApiClient } from "@common/clients/wireFrameClient";
import { IUser } from "@common/models/user";

export const getUserProfile = async (): Promise<IUser> => {
  // getUserProfile: Bu fonksiyon, asenkron olarak çalışır ve bir kullanıcı profilini almak için bir API çağrısı yapar.

  // Promise<IUser>: Bu, fonksiyonun döndüreceği veri türünü belirtir. Bu fonksiyon, IUser türünde bir veri dönecek olan bir Promise döndürür. Promise, asenkron işlemlerde kullanılır ve işlemin sonucunu daha sonra döndürmeyi vaat eder.
  const response = await wireFrameApiClient.get("profile");
  // Bu satır, API'ye "profile" endpoint'ine bir GET isteği yapar. await ifadesi isteğin tamamlanmasını bekler ve sonrasında response değişkenine yanıtı atar.

  return response.data;
  // API yanıtındaki veri kısmını döndürür.
};
