import React, { useEffect, useState } from "react";
import Tabs from "./Tabs";
import styles from "./tabs.module.css";

function ContentTab() {
  return <div>This Is Random Tab</div>;
}

function TabsDemo() {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function fetchCategory(url) {
    try {
      setLoading(true);

      const response = await fetch(url);
      const temp = await response.json();

      if (temp && temp.length > 0) {
        setCategories(temp);
      }
    } catch (e) {
      setErrorMessage(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategory(`https://dummyjson.com/products/categories`);
  }, []);

  const data = [
    { lable: "Tab-1", content: <div>This is Tab 1</div> },
    { lable: "Tab-2", content: <div>This is Tab 2</div> },
    { lable: "Tab-3", content: <ContentTab /> },
  ];

  // function handleChange(currentIndex) {
  //   (currentIndex);
  // }

  if (loading) return <h1>Loading.....</h1>;
  if (errorMessage !== null) return <h1>Error Found {errorMessage}</h1>;

  return (
    <div className={styles.container}>
      <Tabs tabsContent={categories} />
    </div>
  );
}

export default TabsDemo;
