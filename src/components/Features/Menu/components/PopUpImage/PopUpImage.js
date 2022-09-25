import { ReactComponent as RightArrow } from "../../assets/svg/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../assets/svg/left-arrow.svg";

import styles from "./PopUpImage.module.css";

function PopUpImage({ image, onClickForwardBtn, onClickBackBtn, hideButtons }) {
  return (
    <div className={styles.container}>
      <img src={image} />
      {!hideButtons && (
        <>
          <div onClick={onClickForwardBtn} className={`${styles.arrow} ${styles.right}`}>
            <RightArrow />
          </div>
          <div onClick={onClickBackBtn} className={`${styles.arrow} ${styles.left}`}>
            <LeftArrow />
          </div>
        </>
      )}
    </div>
  );
}

export default PopUpImage;
