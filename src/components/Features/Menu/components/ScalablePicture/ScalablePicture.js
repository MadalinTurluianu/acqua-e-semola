import styles from "./ScalablePicture.module.css";

function ScalablePicture({ picture, style }) {
  return (
    <div className={styles.scalablePicture} style={style}>
      <div>
        <img src={picture} alt=""/>
      </div>
    </div>
  );
}

export default ScalablePicture;
