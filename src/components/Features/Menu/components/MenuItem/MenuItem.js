import ScalablePicture from "../ScalablePicture/ScalablePicture";
import LineBar from "../../../../general/components/LineBar/LineBar";

import styles from "./MenuItem.module.css";

function MenuItem({ title, ingredients, price, picture, color }) {
  return (
    <div className={styles.menuItem}>
      <div className={styles.textContent}>
        <h3>
          {title}
          <span className={styles.price}>{`${price}€`}</span>
        </h3>
        <p className={styles.ingredients}>{ingredients}</p>
      </div>
      {picture && (
        <div className={styles.pictureWrapper}>
          <ScalablePicture
            picture={picture}
            style={{ backgroundColor: color }}
          />
        </div>
      )}
      <LineBar />
    </div>
  );
}

export default MenuItem;
