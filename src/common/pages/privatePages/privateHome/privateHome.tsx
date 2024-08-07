import styles from "./privateHome.module.scss";
import { useTranslation } from "react-i18next";

export const PrivateHome = () => {
  const { t } = useTranslation("translations");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{t("privatehome.welcome")}</h2>
        <p>{t("privatehome.lorem")}</p>
      </div>
    </div>
  );
};
