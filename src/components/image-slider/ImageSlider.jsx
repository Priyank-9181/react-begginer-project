import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import styles from "./style.module.css";

const ImageSlider = ({ url, limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImage(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data) {
        setImages(data);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImage(`${url}?limit=${limit}`);
    }
  }, [url, limit]);

  if (loading) return <div>Loading Please Wait...</div>;

  if (error !== null) {
    <h1>Something Went Wrong...{error}</h1>;
  }

  function handlePrevious() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }

  function handleNext() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }

  return (
    <div className={styles.container}>
      <FaArrowAltCircleLeft
        onClick={handlePrevious}
        className={`${styles.arrow} ${styles.arrow_left}`}
      />

      {images.map((value, index) => {
        return (
          <img
            className={
              currentImage === index
                ? styles.current_image
                : `${styles.current_image} ${styles.image_display}`
            }
            key={index}
            src={value.download_url}
            alt={value.id}
          />
        );
      })}

      <FaArrowAltCircleRight
        onClick={handleNext}
        className={`${styles.arrow} ${styles.arrow_right}`}
      />

      {/* indicators */}
      <span className={styles.circle_indicators}>
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  key={index}
                  className={
                    currentImage === index
                      ? styles.active_indicators
                      : `${styles.active_indicators} ${styles.disable_indicators}`
                  }
                  onClick={() => {
                    setCurrentImage(index);
                  }}
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
