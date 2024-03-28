import React, { useState } from "react";
import Modal from "./Modal";
import styles from "./modal.module.css";

function ModalDemo() {
  const [isModal, setIsModal] = useState(false);

  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.modalButton}
        onClick={() => {
          setIsModal(!isModal);
        }}
      >
        Click Me To Open Modal
      </button>
      {isModal && (
        <Modal
          body={
            <div>
              <h1>Something Went Wrong</h1>
            </div>
          }
          header={<h1>Oops!</h1>}
          footer={
            <h5>
              <button>OK CLick ME</button>
            </h5>
          }
          setIsModal={setIsModal}
        />
      )}
    </div>
  );
}

export default ModalDemo;
