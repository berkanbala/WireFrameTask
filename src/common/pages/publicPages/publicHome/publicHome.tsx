import { useAppContext } from "../../../context/appContext";
import { Login } from "../../../../custom/modals/login/login";
import { SignUp } from "../../../../custom/modals/signUp/signUp";
import styles from "./publicHome.module.scss";
export const PublicHome = () => {
  const { modals } = useAppContext();

  // useEffect(() => {
  //   login({
  //     email: "test@test.com",
  //     password: "password",
  //   })
  //     .then((response) => console.log(response))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Best Position Ever Found</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing <br />
          elit, sed do eiusmod tempor incididunt ut labore et <br />
          dolore magna aliqua.
        </p>
      </div>

      {modals.loginModalVisible && <Login />}

      {modals.signUpModalVisible && <SignUp />}
    </div>
  );
};
