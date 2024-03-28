import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import {
  BsEmojiFrown,
  BsEmojiExpressionless,
  BsEmojiGrin,
  BsFillEmojiTearFill,
  BsEmojiSmile,
  BsEmojiNeutral,
} from "react-icons/bs";
import styles from "./style.module.css";

const StarRating = ({ noOfStar = 5 }) => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };
  const handleMouseEnter = (index) => {
    setHover(index);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className={styles.containerS}>
      <div className={styles.innerContainerS}>
        {[...Array(noOfStar)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              key={index}
              className={index <= (hover || rating) ? styles.activeS : styles.inactive}
              size={40}
            />
          );
        })}
      </div>
      <div className={styles.displayS}>
        {hover === noOfStar ? (
          <BsEmojiGrin size={40} />
        ) : hover === 1 ? (
          <BsFillEmojiTearFill size={40} />
        ) : hover === 2 ? (
          <BsEmojiFrown size={40} />
        ) : hover === 3 ? (
          <BsEmojiNeutral size={40} />
        ) : hover === 4 ? (
          <BsEmojiSmile size={40} />
        ) : (
          <BsEmojiExpressionless size={40} />
        )}
        <h1>Rating:- {rating}</h1>
      </div>
    </div>
  );
};

export default StarRating;
