import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>acme</div>
      <div>
        <div> Ready to get started?</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
        </div>
      </div>
      <div>
        <div>© 2010 — 2024 Privacy — Terms</div>
      </div>
    </div>
  );
}
