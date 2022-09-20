import styles from "./LineBar.module.css";

function LineBar({position, top, bottom, width, color}) {
  return (
    <div
      className={styles.lineBar}
      style={{ position, top, bottom, width, color }}
    ></div>
  );
}

export default LineBar;
