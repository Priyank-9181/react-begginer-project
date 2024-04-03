import React, { useContext } from "react";
import styles from "./feature-flag.module.css";
import LightDarkMode from "../light-dark-mode/LightDarkMode";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import GenerateRandomColor from "../random-color/GenerateRandomColor";
import TreeViewSideBar from "../tree-view/TreeViewSideBar";
import StarRating from "../star-rating/StarRating";
import { FeatureFlagContext } from "./context/Context";

function FeatureFlag() {
  const { enableFlags, loading } = useContext(FeatureFlagContext);
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <GenerateRandomColor />,
    },
    {
      key: "showTreeView",
      component: <TreeViewSideBar />,
    },
    {
      key: "showStarRating",
      component: <StarRating />,
    },
  ];

  function checkEnableFlags(getCurrentkey) {
    return enableFlags[getCurrentkey];
  }

  if (loading) return <h1>Loading .....</h1>;

  return (
    <div className={styles.container}>
      <h1>FeatureFlag</h1>
      {componentsToRender.map((value) => {
        return checkEnableFlags(value.key) ? value.component : null;
      })}
    </div>
  );
}

export default FeatureFlag;
