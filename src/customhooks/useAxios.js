import { useEffect, useState } from "react";
import axios from "axios";

export function useAxios(dataURL) {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [fruitsData, setFruitsData] = useState([]);

  useEffect(() => {
    (async function () {
      setLoader(true);
      try {
        const {
          data: { fruits }
        } = await axios.get(dataURL);
        setFruitsData(fruits);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setError(false);
        setLoader(false);
      }
    })();
  }, []);

  return [loader, error, fruitsData];
}
