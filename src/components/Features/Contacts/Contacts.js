import Contact from "./components/Contact/Contact"

import contactData from "./contact-data";

import styles from "./Contacts.module.css"

function Contacts() {
    return <section className={styles.contacts}>
        {contactData.map((contact) => <Contact title={contact.title} value={contact.value} icon={contact.icon} />)}
    </section>
}

export default Contacts;