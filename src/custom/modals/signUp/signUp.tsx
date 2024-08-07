import Iconx from "../../../assets/media/icons/x.png";
import styles from "./signUp.module.scss";
import { Input } from "../../../common/components/ui/input/input";
import { toast } from "react-toastify";
import { Button } from "../../../common/components/ui/button/button";
import { signUp } from "../../../common/services/preLogin";
import { Loading } from "../../../common/components/ui/loading/loading";
import { useState } from "react";
import { useFormik } from "formik";
import { useAppContext } from "../../../common/context/appContext";
import { useTranslation } from "react-i18next";
import { getInitialValuesLogin } from "../login/helpers";

export const SignUp = () => {
  const { modals } = useAppContext();
  const { t } = useTranslation("translations");
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
    if (loading) {
      return;
    }

    modals.setSignUpModalVisible(false);
    modals.setLoginModalVisible(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.caption}>{t("header.signup")}</div>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            value={values.email}
            placeholder={t("modals.email")}
            onChange={handleChange}
            label="Email"
            disabled={loading}
          />
          <Input
            type="password"
            name="password"
            value={values.password}
            placeholder={t("modals.password")}
            onChange={handleChange}
            label="Password"
            disabled={loading}
          />
          <Button type="submit" text={t("header.signup")} disabled={loading} />
        </form>

        <div className={styles.signUp}>
          {t("modals.account")}
          <span onClick={handleSignIn}> {t("header.login")} </span>
        </div>
        <span onClick={handleCloseModal} className={styles.close}>
          <img src={Iconx} alt="x" />
        </span>
      </div>
    </div>
  );
};
