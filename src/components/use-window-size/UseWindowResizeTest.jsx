import React from "react";
import { useWindowResize } from "./useWindowResize";

function UseWindowResizeTest() {
  const { width, height } = useWindowResize();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        backgroundColor: "darkgray",
      }}
    >
      <h1>Use Window Resize Custom Hook</h1>
      <h3>Width:{width}</h3>
      <h3>Heigth:{height}</h3>
    </div>
  );
}

export default UseWindowResizeTest;
