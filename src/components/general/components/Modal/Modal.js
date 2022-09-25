import { createPortal } from "react-dom";
import Backdrop from "../Backdrop/Backdrop";

import styles from "./Modal.module.css";

export default function Modal({ children, onBackdropClick }) {
  return createPortal(
    <div className={styles.modal}>
      <Backdrop onClick={onBackdropClick} />
      <div className={styles.content}>{children}</div>
    </div>,
    document.getElementById("overlay-root")
  );
}
