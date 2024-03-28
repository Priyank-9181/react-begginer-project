// single selection
// multi selection

import React, { useState } from "react";
import data from "./data";
import styles from "./accrodian.module.css";

const Index = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  function handleSelectedItem(getItemId) {
    setSelected(getItemId === selected ? null : getItemId);
  }

  function handleMultiSelectItem(getItemId) {
    let cpMultiSelect = [...multiSelect];
    const findIndexOfItemId = cpMultiSelect.indexOf(getItemId);

    if (findIndexOfItemId === -1) cpMultiSelect.push(getItemId);
    else cpMultiSelect.splice(findIndexOfItemId, 1);

    setMultiSelect(cpMultiSelect);
  }

  return (
    <div className={styles.containerI}>
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
          setMultiSelect([]);
          alert(
            !enableMultiSelection
              ? `You Enable MultiSeletcion`
              : `You Disable MultiSelection`
          );
        }}
      >
        Enable Multi Selection
      </button>
      {data && data.length > 0
        ? data.map((value, index) => {
            return (
              <div key={index} className={styles.wrapperI}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelectItem(value.id)
                      : () => handleSelectedItem(value.id)
                  }
                  className={styles.titleContainer}
                >
                  <h3>{value.question}</h3>
                  <span>{selected === value.id ? "-" : "+"}</span>
                </div>
                {enableMultiSelection
                  ? multiSelect.indexOf(value.id) !== -1 && (
                      <div className={styles.content}>
                        <h4>{value.answer}</h4>
                      </div>
                    )
                  : selected === value.id && (
                      <div className={styles.content}>
                        <h4>{value.answer}</h4>
                      </div>
                    )}
                {/* {selected === value.id ||
                multiSelect.indexOf(value.id) !== -1 ? (
                  <>
                    <hr />
                    <div className="content">
                      <h4>{value.answer}</h4>
                    </div>
                  </>
                ) : null} */}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Index;
