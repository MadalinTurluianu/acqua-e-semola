import Contacts from "../../../features/Contacts/Contacts";

import styles from "./Footer.module.css";

function Footer() {
    return <footer className={styles.footer}>
        <Contacts />
    </footer>
}

export default Footer;