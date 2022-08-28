import styles from "./ScalablePicture.module.css";

function ScalablePicture({ picture, style }) {
  return (
    <div className={styles.scalablePicture} style={style}>
      <div className={styles.voidCyrcle}>
        <div className={styles.imageWrapper}>
          <img src={picture} alt="" />
        </div>
      </div>
      <div className={styles.void1}></div>
      <div className={styles.void2}></div>
      <div className={styles.void3}></div>
    </div>
  );
}

export default ScalablePicture;
