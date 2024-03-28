import React from "react";

function LoadData({ searchData, onClick }) {
  return (
    <ul>
      {searchData
        ? searchData.map((value, index) => {
            return (
              <li
                onClick={() => {
                  onClick(value);
                }}
                key={index}
              >
                {value}
              </li>
            );
          })
        : null}
    </ul>
  );
}

export default LoadData;
