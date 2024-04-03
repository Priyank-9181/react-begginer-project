import React, { useEffect, useRef, useState } from "react";
import styles from "./bottomToTopScroll.module.css";

function BottomToTopScroll() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [scroll, setScroll] = useState(0);
  const ref = useRef(null);

  // async function fetchData(url) {
  //   try {
  //     setLoading(true);

  //     const res = await fetch(url);
  //     const temp = await res.json();

  //     if (temp && temp.products) {
  //       setData(temp.products);
  //     }
  //   } catch (e) {
  //     setError(e.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchData(`https://dummyjson.com/products?limit=100`);
  // }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  // if (loading) return <h1>Loading....</h1>;
  // if (error !== null) return <h2>Something Went Wrong</h2>;

  return (
    <div ref={ref} className={styles.container}>
      {/* <h1>Hello World</h1>
      {data && data.length > 0
        ? data.map((value, index) => {
            return <h4 key={index}>{value.title}</h4>;
          })
        : null} */}

      {scroll > 1200 && (
        <button
          className={styles.scrollButton}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ^
        </button>
      )}

      <button
        className={styles.scrollBottomButton}
        onClick={() => {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        v
      </button>
    </div>
  );
}

export default BottomToTopScroll;
