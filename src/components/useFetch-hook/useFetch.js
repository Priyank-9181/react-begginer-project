import { useState, useEffect } from "react";

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setPending(true);
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(response.statusText);

        const result = await response.json();

        if (result !== null) {
          setData(result);
          //   setPending(false);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setPending(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, pending, error };
}
