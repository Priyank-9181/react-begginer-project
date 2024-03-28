import React from "react";
import styles from "./modal.module.css";

function Modal({ setIsModal, body, header, footer }) {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <button
          className={styles.closingButton}
          onClick={() => {
            setIsModal(false);
          }}
        >
          X
        </button>
        <div className={styles.headerContainer}>
          {header ? header : <h1>Header</h1>}
        </div>
        <div className={styles.bodyContainer}>
          {body ? body : <h1>Body</h1>}
        </div>
        <div className={styles.footerContainer}>
          {footer ? footer : <h1>Footer</h1>}
        </div>
      </div>
    </div>
  );
}

export default Modal;
