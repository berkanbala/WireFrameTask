import styles from "./sure.module.scss";
import Iconx from "../../../assets/media/icons/x.png";
import { Button } from "../../../common/components/ui/button/button";

export const Sure = (props: Props) => {
  const { setVisible } = props;

  const handleCloseModal = () => setVisible(false);

  const handleLogout = () => {
    window.localStorage.clear();
    setVisible(false);
    window.location.href = "/";
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.caption}>Are You Sure?</div>
        <div className={styles.content}>
          <span>Are you sure you want to leave the panel?</span>
          <div className={styles.buttons}>
            <Button
              disabled={false}
              type="button"
              text="Cancel"
              onClick={handleCloseModal}
            />
            <Button
              disabled={false}
              type="button"
              text="Enter"
              onClick={handleLogout}
            />
          </div>
        </div>

        <span onClick={handleCloseModal} className={styles.close}>
          <img src={Iconx} alt="x" />
        </span>
      </div>
    </div>
  );
};

interface Props {
  setVisible: (_visible: boolean) => void;
}
