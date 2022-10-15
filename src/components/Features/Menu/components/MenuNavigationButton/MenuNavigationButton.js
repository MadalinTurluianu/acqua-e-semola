import styles from "./MenuNavigationButton.module.css";

function MenuNavigationButton({ clickHandler, content, selected, isSpecial, icon }) {
  const onClick = () => {
    clickHandler(content);
  };

  return (
    <button className={`${styles.menuNavigation} ${selected && styles.selected}` } onClick={onClick}>
      {isSpecial && <img className={styles.icon} src={icon} alt="" />}
      {isSpecial ? content[0].toUpperCase() + content.slice(1).split("_special").join("") : content[0].toUpperCase() + content.slice(1)}
    </button>
  );
}

export default MenuNavigationButton;
