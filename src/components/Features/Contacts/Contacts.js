import Contact from "./components/Contact/Contact";

import contactData from "./contact-data";

import styles from "./Contacts.module.css";

function Contacts({ cookiesAllowed }) {
  return (
    <section className={styles.contacts}>
      {contactData.map((contact, index) => (
        <Contact
          title={contact.title}
          value={contact.value}
          Icon={contact.Icon}
          SpecialElement={contact.SpecialElement}
          ExtraElement={
            contact.hasCookies && !cookiesAllowed ? null : contact.ExtraElement
          }
          key={`contacts${index}`}
        />
      ))}
    </section>
  );
}

export default Contacts;
