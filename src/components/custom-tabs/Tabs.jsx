import React, { useEffect, useState } from "react";
import styles from "./tabs.module.css";

function Tabs({ tabsContent, onChange }) {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("smartphones");
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function fetchCategory(url) {
    try {
      setLoading(true);

      const response = await fetch(url);
      const temp = await response.json();

      if (temp.products && temp.products.length > 0) {
        setCategory(temp.products);
      }
    } catch (e) {
      setErrorMessage(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategory(`https://dummyjson.com/products/category/${currentCategory}`);
  }, [currentContentIndex]);

  function handleClick(currentIndex, value) {
    setCurrentContentIndex(currentIndex);
    setCurrentCategory(value);
    // onChange(currentIndex);
  }

  if (tabsContent === null) return <h1>NO data</h1>;
  if (loading) return <h1>Loading.....</h1>;
  if (errorMessage !== null) return <h1>Error Found {errorMessage}</h1>;

  return (
    <div className={styles.wrapper}>
      <h1>Categories</h1>
      <div className={styles.headingContainer}>
        {tabsContent.length > 0
          ? tabsContent.map((value, index) => (
              <div
                key={index}
                onClick={() => handleClick(index, value)}
                className={
                  currentContentIndex === index
                    ? `${styles.heading} ${styles.active}`
                    : styles.heading
                }
              >
                <span>{value}</span>
              </div>
            ))
          : null}
      </div>
      <div className={styles.contentContainer}>
        {category && category.length > 0
          ? category.map((value, index) => {
              return (
                <div className={styles.imageContainer} key={index}>
                  <img src={value.images[0]} alt={value.title} />
                </div>
              );
            })
          : null}
      </div>
      {/* <div className="contentContainer">
        {tabsContent[currentContentIndex] &&
          tabsContent[currentContentIndex].content}
      </div> */}
    </div>
  );
}

export default Tabs;
