import React from "react";
import styles from "./lightDarkMode.module.css";
import useLocalStorage from "./useLocalStorage";

function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <div className={styles.mainContainer} data-theme={theme}>
      <div className={styles.innerContainer}>
        <h1>Hello World</h1>
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default LightDarkMode;
