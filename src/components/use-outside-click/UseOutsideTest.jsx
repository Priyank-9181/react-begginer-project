import React, { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "./useOutsideClick";

function UseOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        marginTop: "3rem",
        alignItems: "center",
      }}
    >
      <h1>Use Outside Click Hook</h1>
      {showContent ? (
        <div ref={ref}>
          <h1>Hello World</h1>
          <h4>click any where of outside of div</h4>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>
          Click Me To See Content
        </button>
      )}
    </div>
  );
}

export default UseOutsideTest;
