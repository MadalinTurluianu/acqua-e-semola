import { useState } from "react";
import styles from "./RotatingIcon.module.css";

function RotatingIcon({ picture, style }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.border} style={style}>
        <div className={styles.voidCyrcle}></div>
        <div className={styles.void1}></div>
        <div className={styles.void2}></div>
        <div className={styles.void3}></div>
      </div>
      <div className={styles.imageWrapper}>
        <img onLoad={() => { setImageLoaded(true) }} src={picture} style={{ display: imageLoaded ? "block" : "none" }} alt="" />
      </div>
    </div>

  );
}

export default RotatingIcon;
