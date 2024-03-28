import React, { useEffect, useState } from "react";
import styles from "./randomColor.module.css";
import {
  generateRandomHexColor,
  generateRandomRgbColor,
  generateRandomRgbaColor,
  randomType,
} from "./colorUtilityFunction";

const GenerateRandomColor = () => {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const rt = randomType();
    if (rt === "hex") generateRandomHexColor(setColor);
    else if (rt === "rgb") generateRandomRgbColor(setColor);
    else if (rt === "rgba") generateRandomRgbaColor(setColor);
    setType(rt);
  }, []);

  return (
    <div style={{ backgroundColor: color }} className={styles.containerR}>
      <div className={styles.createButtonContainer}>
        <button
          onClick={() => {
            generateRandomHexColor(setColor);
            setType("hex");
          }}
        >
          Create Hex Color
        </button>
        <button
          onClick={() => {
            generateRandomRgbColor(setColor);
            setType("rgb");
          }}
        >
          Create RGB Color
        </button>
        <button
          onClick={() => {
            generateRandomRgbaColor(setColor);
            setType("rgba");
          }}
        >
          Create RGBA Color
        </button>
      </div>
      <div className={styles.displayContainer}>
        <h2>{`${type} Color`}</h2>
        <h1>{color}</h1>
      </div>
      <div className={styles.generateButtonContainer}>
        <button
          onClick={
            type === "hex"
              ? () => generateRandomHexColor(setColor)
              : type === "rgb"
              ? () => generateRandomRgbColor(setColor)
              : () => generateRandomRgbaColor(setColor)
          }
        >
          Generate Random Color
        </button>
      </div>
    </div>
  );
};

export default GenerateRandomColor;
