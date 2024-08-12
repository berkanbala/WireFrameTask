import Iconx from "@assets/media/icons/x.png";
import styles from "./signUp.module.scss";
import { Input } from "@common/components/ui/input/input";
import { toast } from "react-toastify";
import { Button } from "@common/components/ui/button/button";
import { signUp } from "@common/services/preLogin";
import { useState } from "react";
import { useFormik } from "formik";
import { useAppContext } from "@common/context/appContext";
import { useTranslation } from "react-i18next";
import { getInitialValuesLogin } from "./helpers";

export const SignUp = () => {
  const { modals } = useAppContext();
  const { t } = useTranslation("translations");
  const [loading, setLoading] = useState(false);
  // loading: Kayıt işlemi sırasında yüklenme durumunu izlemek için kullanılan state.

  const { handleSubmit, handleChange, values } = useFormik({
    // Formik, form değerlerini (values) ve değişiklikleri (handleChange) yönetir ve form gönderildiğinde (handleSubmit) kayıt işlemini gerçekleştirir.
    initialValues: getInitialValuesLogin(),
    // Formun başlangıç değerleri getInitialValuesLogin() fonksiyonundan alınır.
    onSubmit: async (values) => {
      try {
        if (values.email == "" || values.password == "") {
          // E-posta veya şifre boşsa, hata mesajı gösterilir.
          toast.error("Fill in all fields.");
          return;
        }
        setLoading(true);
        await signUp(values);
        // loading durumu başlatılır ve signUp fonksiyonu çağrılır.
        toast.success("You have successfully registered.");
      } catch (error: any) {
        console.warn(error);
        toast.error(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    },
  });

  const handleCloseModal = () => modals.setSignUpModalVisible(false);
  // handleSignIn: Kullanıcıyı giriş modalına yönlendirir. Eğer loading durumu aktifse, bu işlem engellenir.

  const handleSignIn = () => {
    if (loading) {
      // Fonksiyon, ilk olarak loading adında bir durumu kontrol ediyor.
      // Eğer loading durumu true ise (yani, şu anda bir yükleme işlemi devam ediyorsa), fonksiyon hiçbir şey yapmadan sona eriyor (return;).
      return;
    }

    modals.setSignUpModalVisible(false);
    modals.setLoginModalVisible(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.caption}>{t("header.signup")}</div>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            value={values.email}
            placeholder={t("modals.email")}
            onChange={handleChange}
            label="Email"
            disabled={loading}
          />
          <Input
            type="password"
            name="password"
            value={values.password}
            placeholder={t("modals.password")}
            onChange={handleChange}
            label="Password"
            disabled={loading}
          />
          <Button type="submit" text={t("header.signup")} disabled={loading} />
        </form>
        <div className={styles.signUp}>
          {t("modals.account")}
          <span onClick={handleSignIn}> {t("header.login")} </span>
        </div>
        <span onClick={handleCloseModal} className={styles.close}>
          <img src={Iconx} alt="x" />
        </span>
      </div>
    </div>
  );
};
