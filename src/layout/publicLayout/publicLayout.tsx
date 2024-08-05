import { Outlet } from "react-router";
import styles from "./publicLayout.module.scss";

export const PublicLayout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};
