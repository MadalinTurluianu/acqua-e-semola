import styles from "./Contact.module.css";

function Contact({ title, value, Icon, SpecialElement }) {

  return (
    <div className={styles.contact}>
      {Icon && <div className={styles.iconWrapper}>{<Icon />}</div>}
      <span>{`${title}`}</span>
      {SpecialElement ? SpecialElement : <span>{value}</span>}
    </div>
  );
}

export default Contact;
