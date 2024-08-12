import { wireFrameApiClient } from "@common/clients/wireFrameClient";
import { IUser } from "@common/models/user";

export const login = async (values: IUserValues): Promise<IUser> => {
  // values: Kullanıcının e-posta ve şifre bilgilerini içeren bir nesnedir. Bu, IUserValues arayüzüyle tanımlanmıştır.
  const response = await wireFrameApiClient.post("login", values);
  // "login" endpoint'ine bir POST isteği yapar ve values nesnesini bu isteğe dahil eder. Bu, API'ye kullanıcının giriş bilgilerini gönderir.

  return response.data;
  // API yanıtındaki veri kısmını döndürür.
};

export const signUp = async (values: IUserValues): Promise<IUser> => {
  // values: Kullanıcının kayıt sırasında sağladığı e-posta ve şifre bilgilerini içeren bir nesnedir. Bu, IUserValues arayüzüyle tanımlanmıştır.
  const response = await wireFrameApiClient.post("register", values);
  // "register" endpoint'ine bir POST isteği yapar ve values nesnesini bu isteğe dahil eder. Bu, API'ye kullanıcının kayıt bilgilerini gönderir.

  return response.data;
  // API yanıtındaki veri kısmını döndürür.
};

interface IUserValues {
  email: string;
  password: string;
}
