import styles from "./MenuNavigationButton.module.css";

function MenuNavigationButton({ clickHandler, content, selected, isSpecial, icon, colors }) {
  const onClick = () => {
    clickHandler(content);
  };

  return (
    <button className={`${styles.menuNavigation} ${selected && styles.selected}`} onClick={onClick}>
      {isSpecial && <p className={styles.newLabel} style={{ backgroundImage: `linear-gradient(to right, ${colors[0]} 20%, ${colors[1]} 40%, ${colors[1]}  60%, ${colors[0]} 80%)` }}>Novità</p>}
      {isSpecial && <img className={styles.icon} src={icon} alt="" />}
      {isSpecial ? content[0].toUpperCase() + content.slice(1).split("_special").join("") : content[0].toUpperCase() + content.slice(1)}
    </button>
  );
}

export default MenuNavigationButton;
