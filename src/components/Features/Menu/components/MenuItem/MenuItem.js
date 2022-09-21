import { useState } from "react";

import RotatingIcon from "../RotatingIcon/RotatingIcon";
import LineBar from "../../../../general/components/LineBar/LineBar";

import styles from "./MenuItem.module.css";

function MenuItem({ title, description, price, icons, color }) {
  const [iconIndex, setIconIndex] = useState(0);

  if (icons.length > 0) {
    setTimeout(() => {
      setIconIndex((prevIndex) => (prevIndex + 1 > icons.length - 1 ? 0 : prevIndex + 1))
    }, 5000)
  }
  
  return (
    <div className={styles.menuItem}>
      <div className={styles.textContent}>
        <h3>
          {title}
          <span className={styles.price}>{price}</span>
        </h3>
        <p className={styles.ingredients}>{description}</p>
      </div>
      {icons && (
        <div className={styles.pictureWrapper}>
          <RotatingIcon picture={icons[iconIndex]} style={{ backgroundColor: color }} />
        </div>
      )}
      <LineBar position="absolute" bottom={0} />
    </div>
  );
}

export default MenuItem;
