import Contacts from "../../../features/Contacts/Contacts";
import Program from "../../../features/Program/Program";

import styles from "./Footer.module.css";

function Footer({ cookiesAllowed }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Contacts cookiesAllowed={cookiesAllowed} />
        <Program />
      </div>
    </footer>
  );
}

export default Footer;
