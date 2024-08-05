import styles from "./header.module.scss";
import { useAppContext } from "../../../../context/appContext";
import classNames from "classnames";

export const Header = (props: Props) => {
  const { className } = props;
  const { modals } = useAppContext();

  const handleLogin = () => {
    modals.setLoginModalVisible(true);
    modals.setSignUpModalVisible(false);
  };
  const handleSignUp = () => {
    modals.setSignUpModalVisible(true);
    modals.setLoginModalVisible(false);
  };

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.logo}>
        <div className={styles.title}>ACME</div>
      </div>
      <div className={styles.content}>
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
      </div>
    </div>
  );
};

interface Props {
  className: string;
}
