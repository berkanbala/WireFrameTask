import { Button } from "../../../common/components/ui/button/button";
import { Input } from "../../../common/components/ui/input/input";
import { useAppContext } from "../../../common/context/appContext";
import styles from "./signUp.module.scss";
import Iconx from "../../../assets/media/icons/x.png";
import { useFormik } from "formik";
import { getInitialValuesLogin } from "../login/helpers";
import { toast } from "react-toastify";
import { signUp } from "../../../common/services/preLogin";
import { useState } from "react";
import { Loading } from "../../../common/components/ui/loading/loading";

export const SignUp = () => {
  const { auth, modals } = useAppContext();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: getInitialValuesLogin(),
    onSubmit: async (values) => {
      try {
        if (values.email == "" || values.password == "") {
          toast.error("Fill in all fields.");
          return;
        }
        setLoading(true);
        await signUp(values);
        toast.success("You have successfully registered.");
      } catch (error: any) {
        console.warn(error);
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    },
  });

  const handleCloseModal = () => modals.setSignUpModalVisible(false);

  const handleSignIn = () => {
    if (!loading) {
      return <Loading />;
    }

    modals.setSignUpModalVisible(false);
    modals.setLoginModalVisible(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.caption}>SIGN UP</div>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            value={values.email}
            placeholder="email"
            onChange={handleChange}
            label="Email"
            disabled={loading}
          />
          <Input
            type="password"
            name="password"
            value={values.password}
            placeholder="password"
            onChange={handleChange}
            label="Password"
            disabled={loading}
          />
          <Button type="submit" text="Sign Up" disabled={loading} />
        </form>

        <div className={styles.signUp}>
          Already have an account?
          <span onClick={handleSignIn}> Log In </span>
        </div>
        <span onClick={handleCloseModal} className={styles.close}>
          <img src={Iconx} alt="x" />
        </span>
      </div>
    </div>
  );
};
