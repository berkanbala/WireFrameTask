import styles from "./privateLayout.module.scss";
import { Outlet } from "react-router";
import { Header } from "@common/components/ui/layout/header/header";
import { AppliedJobs } from "@custom/components/appliedJobs/appliedJobs";

export const PrivateLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <Header className={styles.header} />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
      <div className={styles.sideMenu}>
        <AppliedJobs />
      </div>
    </div>
  );
};
