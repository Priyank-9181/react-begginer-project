import React, { useEffect, useState } from "react";
import styles from "./scrollIndicator.module.css";

function ScrollIndicator() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const responese = await fetch(
          `https://dummyjson.com/products?limit=100`
        );

        const temp = await responese.json();

        if (temp) {
          setData(temp);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  function handleScrollPercentage() {
    // (document.body.scrollTop);
    // (document.documentElement.scrollTop);
    // (document.documentElement.scrollHeight);
    // (document.documentElement.clientHeight);

    const howMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const heigth =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScroll / heigth) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) return <h1>Loading....</h1>;
  if (error !== null) return <h1>Something Went Wrong{error}</h1>;
  return (
    <div className={styles.container}>
      <div className={styles.scrollContainer}>
        <h1>Custom Scroll Indicator</h1>
        <div
          style={{ width: `${scrollPercentage}%` }}
          className={styles.scroll}
        ></div>
      </div>
      <div className={styles.productsContainer}>
        {data && data.products && data.products.length > 0
          ? data.products.map((value, index) => {
              return <p key={index}>{value.title}</p>;
            })
          : null}
      </div>
    </div>
  );
}

export default ScrollIndicator;
