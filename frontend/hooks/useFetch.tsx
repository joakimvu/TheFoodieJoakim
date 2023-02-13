import { useState, useEffect } from "react";

export default function useFetch(url: String) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
      fetchRecipe();
    };
  }, []);
  return { data, error, loading };
}
