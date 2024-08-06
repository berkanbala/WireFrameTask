import styles from "./privateHome.module.scss";

export const PrivateHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>WELCOME</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing <br />
          elit, sed do eiusmod tempor incididunt ut labore et <br />
          dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};
