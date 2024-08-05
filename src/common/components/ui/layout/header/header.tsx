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
    <div className={classNames(styles.container,className)}>
      <div className={styles.navbarsub}>
        <div className={styles.navbarsublist}>
          <ul>
            <li className={styles.title}>
              <h2>ACME</h2>
            </li>
          </ul>
        </div>
        <ul className={styles.itemx} style={{ marginRight: "40px" }}>
          <li className={styles.dropdown}>
            <div className={styles.dropbtnx}>
              <div className={styles.link} onClick={handleLogin}>
                Login
              </div>
            </div>
          </li>
          <li className={styles.dropdown}>
            <div className={styles.dropbtnx}>
              <div className={styles.link} onClick={handleSignUp}>
                Sign Up
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

interface Props {
  className: string;
}
