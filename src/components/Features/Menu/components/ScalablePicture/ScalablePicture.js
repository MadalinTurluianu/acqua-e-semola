import styles from "./ScalablePicture.module.css";

function ScalablePicture({ picture, style }) {
  console.log(style);
  return (
    <div className={styles.scalablePicture} style={style}>
      <div>
        <img src={picture} />
      </div>
    </div>
  );
}

export default ScalablePicture;
