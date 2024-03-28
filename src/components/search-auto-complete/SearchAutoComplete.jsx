import React, { useEffect, useRef, useState } from "react";
import LoadData from "./LoadData";
import styles from "./searchAuto.module.css";
import { name } from "./data";

function SearchAutoComplete() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [errorM, setErroM] = useState(null);
  const [loadData, setLoadData] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSeacrhData] = useState([]);
  const ref = useRef();

  // async function fetchSomeData(url) {
  //   try {
  //     setLoading(true);
  //     const res = await fetch(url);
  //     const temp = await res.json();
  //     if (temp && temp.users && temp.users.length) {
  //       setData(temp.users.map((value) => value.firstName.toLowerCase()));
  //     }
  //   } catch (e) {
  //     setErroM(e.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  useEffect(() => {
    // fetchSomeData(`https://dummyjson.com/users`);
  }, []);

  function handleClick(value) {
    setSearchQuery(value);
    setLoadData(false);
    setSeacrhData([]);
  }

  // if (loading) return <h1>Loading ...</h1>;
  // if (errorM !== null) return <h1>Something Went Wrong {errorM}</h1>;

  return (
    <div className={styles.container}>
      <input
        ref={ref}
        type="text"
        onChange={(e) => {
          setSearchQuery(e.target.value);

          if (e.target.value.length > 0) {
            const temp = name.filter((v) => {
              return v.toLowerCase().indexOf(searchQuery) > -1;
            });
            setSeacrhData(temp);
            setLoadData(true);
          } else {
            setSeacrhData([]);
            setLoadData(false);
          }
        }}
        value={searchQuery}
        placeholder="Search Here"
      />

      <div>
        {loadData ? (
          <LoadData onClick={handleClick} searchData={searchData} />
        ) : null}
      </div>
    </div>
  );
}

export default SearchAutoComplete;
