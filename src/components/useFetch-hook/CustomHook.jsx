import { useFetch } from "./useFetch";
import styles from "./customHook.module.css";

function CustomHook() {
  const { data, pending, error } = useFetch(
    `https://dummyjson.com/products`,
    {}
  );

  return (
    <div className={styles.container}>
      {pending && <h1>pending....</h1>}
      {error !== null && <h2>{error} Something Went Wrong</h2>}
      <h1>Custoom Hook Use Fetch</h1>
      {data && data.products && data.products.length > 0
        ? data.products.map((value, index) => {
            return <p key={index}>{value.title}</p>;
          })
        : null}
    </div>
  );
}

export default CustomHook;
