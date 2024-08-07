import styles from "./header.module.scss";
import Icontr from "../../../../../assets/media/icons/tr.png";
import Iconen from "../../../../../assets/media/icons/uk.png";
import classNames from "classnames";
import { Sure } from "../../../../../custom/modals/sure/sure";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "../../../../context/appContext";
import { useTranslation } from "react-i18next";

export const Header = (props: Props) => {
  const { className } = props;
  const navigate = useNavigate();
  const { modals, auth } = useAppContext();
  const { t, i18n } = useTranslation("translations");
  const [sureModalVisible, setSureModalVisible] = useState(false);
  const userId = auth.user.id;

  const handleLogin = () => {
    modals.setLoginModalVisible(true);
    modals.setSignUpModalVisible(false);
  };

  const handleSignUp = () => {
    modals.setSignUpModalVisible(true);
    modals.setLoginModalVisible(false);
  };

  const handleSignOut = () => setSureModalVisible(true);

  const handleJobList = () => navigate("/jobs");
  const handleHome = () => navigate("/");
  const changeLanguage = (e: any) => i18n.changeLanguage(e.target.value);

  const renderContent = () => {
    if (!userId) {
      return (
        <>
          <div
            className={classNames(styles.link, styles.login)}
            onClick={handleLogin}
          >
            {t("header.login")}
          </div>
          <div
            className={classNames(styles.link, styles.signUp)}
            onClick={handleSignUp}
          >
            {t("header.signup")}
          </div>
        </>
      );
    }

    return (
      <>
        <div className={styles.job} onClick={handleJobList}>
          {t("navbar.joblist")}
        </div>
        <div className={styles.logout} onClick={handleSignOut}>
          {t("navbar.logout")}
        </div>
        <div className={styles.user}>
          <div>{auth.user?.email}</div>
          <img src={auth.user?.profileImage} alt="icon" />
        </div>

        {sureModalVisible && <Sure setVisible={setSureModalVisible} />}
      </>
    );
  };

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.logo}>
        <div className={styles.title} onClick={handleHome}>
          ACME
        </div>
      </div>
      <div className={styles.content}>
        {renderContent()}
        <div className={styles.languages}>
          <input
            type="image"
            value="tr"
            onClick={changeLanguage}
            src={Icontr}
            alt="TR"
            className={styles.lang}
          />
          <input
            type="image"
            value="en"
            onClick={changeLanguage}
            src={Iconen}
            alt="EN"
            className={styles.lang}
          />
        </div>
      </div>
    </div>
  );
};

interface Props {
  className: string;
}
