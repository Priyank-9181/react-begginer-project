import { useLayoutEffect, useState } from "react";

export function useWindowResize() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  function handleSize() {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    handleSize();
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return size;
}
