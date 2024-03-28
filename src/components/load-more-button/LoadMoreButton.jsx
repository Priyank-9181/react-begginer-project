import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

function LoadMoreButton() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );
        const data = await response.json();

        if (data) {
          setProducts(
            count === 0
              ? () => data.products
              : (prevData) => {
                  return [...prevData, ...data.products];
                }
          );
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    if (products.length === 100) {
      setDisableButton(true);
    }
    fetchProducts();
  }, [count]);

  if (loading) return <h1>Loading....</h1>;

  if (error !== null) return <h1>Something Went Wrong {error}</h1>;

  return (
    <div className={styles.displayContainer}>
      <div className={styles.productsListContainer}>
        {products !== null && products.length
          ? products.map((value, index) => {
              return (
                <div className={styles.productContainer} key={index}>
                  <img src={value.images[0]} alt={value.id} />
                  <div className={styles.descContainer}>
                    <h1>Modle: {value.title}</h1>
                    <h3>Brand Name: {value.brand}</h3>
                    <h3>Price: {value.price + "$"}</h3>
                    <p>{value.id}</p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <button
        className={styles.buttonLoad}
        disabled={disableButton}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Load More Products
      </button>
      {disableButton ? <p>You reached 100 products</p> : null}
    </div>
  );
}

export default LoadMoreButton;
