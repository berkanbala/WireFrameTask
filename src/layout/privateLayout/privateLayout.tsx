import { Outlet } from "react-router";
import styles from "./privateLayout.module.scss";
import { Header } from "../../common/components/ui/layout/header/header";

export const PrivateLayout = () => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
