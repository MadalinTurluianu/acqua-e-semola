import logo from "../../../../assets/logo.png";
import styles from "./Logo.module.css";

function Logo() {
  return <img src={logo} alt="logo" className={styles.logo}/>;
}

export default Logo;
