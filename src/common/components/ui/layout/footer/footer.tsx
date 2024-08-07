import styles from "./footer.module.scss";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

export const Footer = (props: Props) => {
  const { className } = props;
  const { t } = useTranslation("translations");

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.left}>
        <div className={styles.logo}>ACME</div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.title}> {t("footer.title")} </div>
          <div className={styles.description}>{t("footer.lorem")}</div>
        </div>
      </div>
      <div className={styles.division} />
      <div className={styles.right}>© 2010 — 2024 Privacy — Terms</div>
    </div>
  );
};

interface Props {
  className: string;
}
