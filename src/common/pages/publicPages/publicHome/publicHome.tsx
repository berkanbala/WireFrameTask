import styles from "./publicHome.module.scss";
import { Login } from "@custom/modals/login/login";
import { SignUp } from "@custom/modals/signUp/signUp";
import { useAppContext } from "@common/context/appContext";
import { useTranslation } from "react-i18next";
export const PublicHome = () => {
  const { modals } = useAppContext();
  const { t } = useTranslation("translations");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{t("publichome.bestpositioneverfound")}</h2>
        <p>{t("publichome.lorem")}</p>
      </div>

      {modals.loginModalVisible && <Login />}

      {modals.signUpModalVisible && <SignUp />}
    </div>
  );
};
