import React, { useEffect, useRef, useState } from "react";
import GitHubCard from "./GitHubCard";
import styles from "./gitHub.module.css";

function GihubFinder() {
  const [searchName, setSearchName] = useState("Priyank-9181");
  const [gitData, setGitData] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  async function gitFetchData(url) {
    try {
      setLoading(true);

      const res = await fetch(url);
      const temp = await res.json();

      if (temp) {
        setGitData(temp);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    gitFetchData(`https://api.github.com/users/${searchName}`);
  }, []);

  if (loading) return <h1>Loading ...</h1>;

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => {
          setSearchName(e.target.value);
        }}
        // value={searchName}

        placeholder="Search Name"
      />
      <button
        onClick={() => {
          gitFetchData(`https://api.github.com/users/${searchName}`);
          setSearchName("");
          inputRef.current.focus();
        }}
      >
        Find
      </button>
      <GitHubCard user={gitData} />
    </div>
  );
}

export default GihubFinder;
