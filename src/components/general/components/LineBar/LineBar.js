import styles from "./LineBar.module.css";

function LineBar({ style }) {
  return <div className={styles.lineBar} style={style}></div>;
}

export default LineBar;
