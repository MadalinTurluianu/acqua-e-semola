import Contacts from "../../../features/Contacts/Contacts";
import Program from "../../../features/Program/Program";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Contacts />
        <Program />
      </div>
    </footer>
  );
}

export default Footer;
