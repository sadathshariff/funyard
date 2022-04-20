import axios from "axios";
import { useEffect, useState } from "react";
export const UseAxios = (apiUrl) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(apiUrl);
      setResponse(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(apiUrl);
  }, [apiUrl]);

  return { response, loading, error };
};
