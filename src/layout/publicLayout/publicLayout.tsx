import styles from "./publicLayout.module.scss";
import { Outlet } from "react-router";
import { Header } from "../../common/components/ui/layout/header/header";
import { Footer } from "../../common/components/ui/layout/footer/footer";

export const PublicLayout = () => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};
