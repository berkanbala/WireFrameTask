import { Outlet } from "react-router";
import styles from "./privateLayout.module.scss";

export const PrivateLayout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};
