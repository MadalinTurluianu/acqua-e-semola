import styles from "./MenuNavigationButton.module.css";

function MenuNavigationButton({ clickHandler, content, selected }) {
  const onClick = () => {
    clickHandler(content);
  };

  return (
    <button className={`${styles.menuNavigation} ${selected && styles.selected}` } onClick={onClick}>
      {content}
    </button>
  );
}

export default MenuNavigationButton;
