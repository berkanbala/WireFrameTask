import { Button } from "../../../common/components/ui/button/button";
import { Input } from "../../../common/components/ui/input/input";
import { useAppContext } from "../../../common/context/appContext";
import styles from "./signUp.module.scss";
import Iconx from "../../../assets/media/icons/x.png";

export const SignUp = () => {
  const { auth, modals } = useAppContext();

  const handleCloseModal = () => modals.setSignUpModalVisible(false);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.caption}>SIGN UP</div>
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
          <Button className={styles.button} type="submit" text="Sign Up" />

          <div className={styles.signUp}>
            Already have an account?
            <span> Log In</span>
          </div>
        </form>
        <span onClick={handleCloseModal} className={styles.close}>
          <img src={Iconx} alt="x" />
        </span>
      </div>
    </div>
  );
};
