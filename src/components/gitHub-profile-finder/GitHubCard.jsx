import React from "react";
import styles from "./gitHub.module.css";

function GitHubCard({ user }) {
  if (user === null) {
    return null;
  }

  const { avatar_url, html_url, followers, following, login, created_at } =
    user;
  const date = new Date(created_at);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={avatar_url} alt={login} />
      </div>
      <div className={styles.desc_container}>
        <p>Login: {login}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>
          User Join at
          {` ${date.getDate()} ${date.toLocaleString("en-us", {
            month: "short",
          })} ${date.getFullYear()}`}
        </p>
        <p>
          Url:{" "}
          <a href={html_url} target="_blank">
            {html_url}
          </a>
        </p>
      </div>
    </div>
  );
}

export default GitHubCard;
