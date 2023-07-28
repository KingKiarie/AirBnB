import styles from "./nav.module.css";
import Logo from "../../assets/download.png";

const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.Logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={styles.input}>
          <input type="text" placeholder="Any Place| Any Where| Add guest" />
          <button className={styles.icon}>&#128269;</button>
        </div>
        <div className={styles.switch}>switch</div>
      </nav>
    </>
  );
};

export default NavBar;
