import { useEffect, useState } from "react";

import RotatingIcon from "../RotatingIcon/RotatingIcon";
import LineBar from "../../../../general/components/LineBar/LineBar";
import PopUpImage from "../PopUpImage/PopUpImage";
import styles from "./MenuItem.module.css";
import Modal from "../../../../general/components/Modal/Modal";

import { ReactComponent as PointerIcon } from "../../assets/svg/hand-pointer.svg";

function MenuItem({ title, description, price, icons, color, listIndex }) {
  const [iconIndex, setIconIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (icons.length > 1) {
      const timeoutId = setTimeout(() => {
        setIconIndex((prevIndex) =>
          prevIndex + 1 > icons.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearTimeout(timeoutId);
    } else {
      setIconIndex(0);
    }
  }, [iconIndex, icons.length]);

  const goToNextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex + 1 > icons.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex - 1 < 0 ? icons.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className={styles.menuItem}>
        <div className={styles.textContent}>
          <h3>
            {title}
            <span className={styles.price}>{price}</span>
          </h3>
          <p className={styles.ingredients}>{description}</p>
        </div>
        {icons && (
          <div
            className={styles.pictureWrapper}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <RotatingIcon
              picture={icons[iconIndex]}
              style={{ backgroundColor: color }}
            />
            {listIndex === 0 && <div className={styles.pointerIconContainer}>
              <PointerIcon />
            </div>}
          </div>
        )}
        <LineBar position="absolute" bottom={0} />
      </div>
      {modalOpen && (
        <Modal
          onBackdropClick={() => {
            setModalOpen(false);
          }}
        >
          <PopUpImage
            hideButtons={icons.length < 2}
            onClickBackBtn={goToPrevImage}
            onClickForwardBtn={goToNextImage}
            image={icons[imageIndex]}
          />
        </Modal>
      )}
    </>
  );
}

export default MenuItem;
