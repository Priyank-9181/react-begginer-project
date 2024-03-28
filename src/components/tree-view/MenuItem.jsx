import React, { useState } from "react";
import MenuList from "./MenuList";
import styles from "./treeViewSideBar.module.css";

function MenuItem({ value }) {
  const [displayChildren, setDisplayChildren] = useState({});

  function handleToogleItem(label) {
    setDisplayChildren({
      ...displayChildren,
      [label]: !displayChildren[label],
    });
  }

  return (
    <li className={styles.labelContainer}>
      <div>
        <p>{value.label} </p>
        {value && value.children && value.children.length > 0 ? (
          <span onClick={() => handleToogleItem(value.label)}>
            {displayChildren[value.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {value.children &&
      value.children.length > 0 &&
      displayChildren[value.label] ? (
        <MenuList list={value.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
