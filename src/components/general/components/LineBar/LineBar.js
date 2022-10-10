import styles from "./LineBar.module.css";

function LineBar({position, top, bottom, width, color, minWidth, maxWidth}) {
  return (
    <div
      className={styles.lineBar}
      style={{ position, top, bottom, width, color, minWidth, maxWidth }}
    ></div>
  );
}

export default LineBar;
