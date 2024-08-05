import { Button } from "../../../common/components/ui/button/button";
import { Input } from "../../../common/components/ui/input/input";
import { useAppContext } from "../../../common/context/appContext";
import styles from "./login.module.scss";
import Iconx from "../../../assets/media/icons/x.png";

export const Login = () => {
  const { auth, modals } = useAppContext();

  const handleCloseModal = () => modals.setLoginModalVisible(false);
  const handleSignUp = () => {
    modals.setLoginModalVisible(false);
    modals.setSignUpModalVisible(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.caption}>LOG IN</div>
        <form>
          <div className={styles.label}>Email</div>
          <Input
            type="text"
            name="email"
            value={"email"}
            placeholder="email"
            onChange={() => console.log("saas")}
          />
          <div className={styles.label}>Password</div>
          <Input
            type="password"
            name="password"
            value={"password"}
            placeholder="password"
            onChange={() => console.log("saas")}
          />
          <Button className={styles.button} type="submit" text="Login" />

          <div className={styles.login}>
            Don’t have an account?
            <span onClick={handleSignUp}> Sign Up</span>
          </div>
        </form>
        <span onClick={handleCloseModal} className={styles.close}>
          <img src={Iconx} alt="x" />
        </span>
      </div>
    </div>
  );
};
