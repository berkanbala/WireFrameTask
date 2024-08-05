import { Link } from "react-router-dom";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarsub}>
        <div className={styles.navbarsublist}>
          <ul>
            <li className={styles.title}>
              <h2>ACME</h2>
            </li>
          </ul>
        </div>
        <ul className={styles.itemx} style={{ marginRight: "40px" }}>
          <li className={styles.dropdown}>
            <div className={styles.dropbtnx}>
              <Link className={styles.link} to="/login">
                Login
              </Link>
            </div>
          </li>
          <li className={styles.dropdown}>
            <div className={styles.dropbtnx}>
              <Link className={styles.link} to="/sign-Up">
                Sign Up
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
