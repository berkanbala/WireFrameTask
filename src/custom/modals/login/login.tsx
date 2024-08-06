import { Button } from "../../../common/components/ui/button/button";
import { Input } from "../../../common/components/ui/input/input";
import { useAppContext } from "../../../common/context/appContext";
import styles from "./login.module.scss";
import Iconx from "../../../assets/media/icons/x.png";
import { useFormik } from "formik";
import { getInitialValuesLogin } from "./helpers";
import { login } from "../../../common/services/preLogin";
import { toast } from "react-toastify";
import { useState } from "react";

export const Login = () => {
  const { auth, modals } = useAppContext();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, handleChange, values, resetForm } = useFormik({
    initialValues: getInitialValuesLogin(),
    onSubmit: async (values) => {
      try {
        if (values.email == "" || values.password == "") {
          toast.error("Fill in all fields.");
          return;
        }
        setLoading(true);
        const response = await login(values);
        console.log(response);
        window.localStorage.setItem("accessToken", response.accessToken);
        window.localStorage.setItem("refreshToken", response.refreshToken);
        auth.setUser(response.user);
        toast.success("You've made a successful entry.");
        resetForm();
        window.location.href = "/";
      } catch (error: any) {
        console.warn(error);
        toast.error(error.response.data.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    },
  });

  const handleCloseModal = () => modals.setLoginModalVisible(false);

  const handleSignUp = () => {
    if (loading) {
      return;
    }

    modals.setLoginModalVisible(false);
    modals.setSignUpModalVisible(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.caption}>LOG IN</div>
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
          <Button type="submit" text="Login" disabled={loading} />
        </form>

        <div className={styles.login}>
          Don’t have an account?
          <span onClick={handleSignUp}> Sign Up</span>
        </div>

        <span onClick={handleCloseModal} className={styles.close}>
          <img src={Iconx} alt="x" />
        </span>
      </div>
    </div>
  );
};
