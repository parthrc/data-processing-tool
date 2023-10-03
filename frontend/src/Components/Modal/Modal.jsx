import { useState } from "react";
import styles from "./Modal.module.css";

function Modal() {
  //States
  const [isOpen, setIsOpen] = useState(true);

  //Constants
  const modalCSS = isOpen ? styles.openModal : styles.closeModal;

  return (
    <div className={`${styles.Modal} ${modalCSS}`}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={() => setIsOpen(!isOpen)}>
          &times;
        </span>
        <p>This is a modal</p>
      </div>
    </div>
  );
}

export default Modal;
