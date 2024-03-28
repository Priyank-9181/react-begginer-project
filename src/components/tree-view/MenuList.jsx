import React from "react";
import MenuItem from "./MenuItem";
import styles from "./treeViewSideBar.module.css";

function MenuList({ list = [] }) {
  return (
    <ul className={styles.listContainer}>
      {list && list.length > 0
        ? list.map((value, index) => {
            return <MenuItem value={value} key={index} />;
          })
        : null}
    </ul>
  );
}

export default MenuList;
