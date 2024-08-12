import Iconx from "@assets/media/icons/x.png";
import styles from "./sure.module.scss";
import { Button } from "@common/components/ui/button/button";
import { useTranslation } from "react-i18next";

export const Sure = (props: Props) => {
  const { setVisible } = props;
  const { t } = useTranslation("translations");

  const handleCloseModal = () => setVisible(false);
  const handleLogout = () => {
    // handleLogout: Bu fonksiyon, çıkış yapmak için kullanılır.
    window.localStorage.clear();
    // Öncelikle, kullanıcının tarayıcısındaki localStorage temizlenir.
    setVisible(false);
    window.location.href = "/";
    // Daha sonra modal kapatılır ve kullanıcı anasayfaya yönlendirilir.
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.caption}>{t("modals.suretitle")}</div>
        <div className={styles.content}>
          <span>{t("modals.suredescription")}</span>
          <div className={styles.buttons}>
            <Button
              disabled={false}
              type="button"
              text={t("modals.cancel")}
              onClick={handleCloseModal}
            />
            <Button
              disabled={false}
              type="button"
              text={t("modals.enter")}
              onClick={handleLogout}
            />
          </div>
        </div>
        <span onClick={handleCloseModal} className={styles.close}>
          <img src={Iconx} alt="x" />
        </span>
      </div>
    </div>
  );
};

interface Props {
  setVisible: (_visible: boolean) => void;
}
