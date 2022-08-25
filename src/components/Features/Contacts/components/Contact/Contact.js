import styles from "./Contact.module.css";

function Contact({ title, value, icon }) {
  return (
    <div className={styles.contact}>
      <span>{`${title}:`}</span>
      <span>{value}</span>
      {icon && <img src={icon} />}
    </div>
  );
}

export default Contact;
