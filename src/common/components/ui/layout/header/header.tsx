import styles from "./header.module.scss";
import { useAppContext } from "../../../../context/appContext";
import classNames from "classnames";
import { useState } from "react";
import { Sure } from "../../../../../custom/modals/sure/sure";

export const Header = (props: Props) => {
  const { className } = props;
  const { modals, auth } = useAppContext();
  const userId = auth.user.id;
  const [sureModalVisible, setSureModalVisible] = useState(false);

  console.log(auth.user);
  const handleLogin = () => {
    modals.setLoginModalVisible(true);
    modals.setSignUpModalVisible(false);
  };

  const handleSignUp = () => {
    modals.setSignUpModalVisible(true);
    modals.setLoginModalVisible(false);
  };

  const handleSignOut = () => setSureModalVisible(true);

  const renderContent = () => {
    if (!userId) {
      return (
        <>
          <div
            className={classNames(styles.link, styles.login)}
            onClick={handleLogin}
          >
            Login
          </div>
          <div
            className={classNames(styles.link, styles.signUp)}
            onClick={handleSignUp}
          >
            Sign Up
          </div>
        </>
      );
    }

    return (
      <>
        <div className={styles.job}>Job List</div>
        <div className={styles.logout} onClick={handleSignOut}>
          Logout
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
        <div className={styles.title}>ACME</div>
      </div>
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
};

interface Props {
  className: string;
}
