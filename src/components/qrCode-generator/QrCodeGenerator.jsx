import React, { useState } from "react";
import QRCode from "react-qr-code";
import styles from "./qrStyle.module.css";

function QrCodeGenerator() {
  const [query, setQuery] = useState(null);
  const [input, setInput] = useState(null);

  function handleOnclick() {
    setQuery(input);
  }

  return (
    <div className={styles.container}>
      <div className={styles.qrContainer}>
        <h1>Qr Code Generator</h1>
        <br />
        <input
          type="text"
          placeholder="Enter Your Value Here"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <br />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={() => handleOnclick()}
        >
          Generate Qr Code
        </button>

        <br />
        <br />

        <QRCode id="qr" value={query !== null ? query : ""} />
      </div>
    </div>
  );
}

export default QrCodeGenerator;
