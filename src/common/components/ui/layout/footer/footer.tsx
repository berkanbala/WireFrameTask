import styles from "./footer.module.scss";
import classNames from "classnames";

export const Footer = (props: Props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.left}>
        <div className={styles.logo}>ACME</div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.title}> Ready to get started?</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </div>
        </div>
      </div>
      <div className={styles.division} />
      <div className={styles.right}>© 2010 — 2024 Privacy — Terms</div>
    </div>
  );
};

interface Props {
  className: string;
}
