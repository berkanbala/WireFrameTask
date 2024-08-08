import Iconx from "@assets/media/icons/x.png";
import styles from "./login.module.scss";
import { Input } from "@common/components/ui/input/input";
import { login } from "@common/services/preLogin";
import { toast } from "react-toastify";
import { Button } from "@common/components/ui/button/button";
import { useState } from "react";
import { useFormik } from "formik";
import { useAppContext } from "@common/context/appContext";
import { useTranslation } from "react-i18next";
import { getInitialValuesLogin } from "./helpers";

export const Login = () => {
  const { auth, modals } = useAppContext();
  const { t } = useTranslation("translations");
  const [loading, setLoading] = useState(false);

  const { handleSubmit, handleChange, values, resetForm } = useFormik({
    initialValues: getInitialValuesLogin(),
    onSubmit: async (values) => {
      try {
        if (values.email == "" || values.password == "") {
          toast.error("Fill in all fields.");
          return;
        }

        setLoading(true);
        const response = await login(values);
        window.localStorage.setItem("accessToken", response.accessToken);
        window.localStorage.setItem("refreshToken", response.refreshToken);
        auth.setUserInfo(response);
        toast.success("You've made a successful entry.");
        resetForm();
        window.location.href = "/";
      } catch (error: any) {
        console.warn(error);
        toast.error(error.response.data.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    },
  });

  const handleCloseModal = () => modals.setLoginModalVisible(false);

  const handleSignUp = () => {
    if (loading) {
      return;
    }

    modals.setLoginModalVisible(false);
    modals.setSignUpModalVisible(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.caption}> {t("header.login")}</div>
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
          <Button type="submit" text={t("header.login")} disabled={loading} />
        </form>
        <div className={styles.login}>
          {t("modals.newaccount")}
          <span onClick={handleSignUp}> {t("modals.signUp")} </span>
        </div>
        <span onClick={handleCloseModal} className={styles.close}>
          <img src={Iconx} alt="x" />
        </span>
      </div>
    </div>
  );
};
