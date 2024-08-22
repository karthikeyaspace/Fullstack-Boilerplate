import { useState, useEffect } from "react";
import apiClient from "../config/axios";

// used as reload hook
// when use reloads or visits the page
// GET: /api/getdata

const useFetch = (path: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get(path);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [path]);

  return { data, error, loading };
};

export default useFetch;
