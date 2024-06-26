import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Unable to fetch this data...");
          }
          return res.json();
        })
        .then((data) => {
          setError(null);
          setIsPending(false);
          setdata(data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Abort fetch");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
