import { Outlet } from "react-router";
import { Loading } from "../common/components/ui/loading/loading";
import { useAppContext } from "../common/context/appContext";
import { getUserProfile } from "../common/services/user";
import { useEffect, useState } from "react";

export const PrivateRoutesGuard = () => {
  const { auth } = useAppContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // useEffect: Bileşen ilk yüklendiğinde handleGetUser fonksiyonunu çalıştırır.
    const handleGetUser = async () => {
      // handleGetUser: Kullanıcının profilini almak için asenkron olarak çalışır.
      try {
        const response = await getUserProfile();
        // getUserProfile: API'den kullanıcı profilini alır.
        if (!response) {
          window.localStorage.clear();
          window.location.href = "/";
          return;
          // Eğer response değeri null veya undefined ise (yani kullanıcı doğrulanamazsa) localStorage temizlenir ve kullanıcı ana sayfaya yönlendirilir.
        }
        auth.setUserInfo({ ...auth.userInfo, user: response });
        // Kullanıcı doğrulanırsa, auth.setUserInfo ile kullanıcı bilgileri güncellenir.
      } catch (error) {
        console.warn(error);
      } finally {
        setLoading(true);
        // setLoading(true): Son olarak, yükleme tamamlandığında loading durumu true olarak ayarlanır.
      }
    };

    handleGetUser();
    // handleGetUser fonksiyonunun tanımlandıktan hemen sonra useEffect içindeki kod bloğunda çağrılması bileşen ilk kez render edildiğinde kullanıcı profilini almak istiyoruz.
  }, []);

  if (!loading) {
    return <Loading />;
    // Eğer loading durumu hala false ise (yani veri yükleniyorsa) Loading bileşeni render edilir böylece kullanıcıya bir yükleme göstergesi sunulur.
  }

  return <Outlet />;
  // Eğer loading durumu true ise, bileşen doğrulanmış rotayı render eder, yani Outlet bileşeni gösterilir.
};
