import React from "react";
import MenuList from "./MenuList";
import { menus } from "./data";
import styles from "./treeViewSideBar.module.css";

function TreeViewSideBar() {
  return (
    <div className={styles.container}>
      <MenuList list={menus} />
    </div>
  );
}

export default TreeViewSideBar;
