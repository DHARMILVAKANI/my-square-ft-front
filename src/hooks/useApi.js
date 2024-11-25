// src/hooks/useApi.js

import { useState, useEffect } from 'react';

export const useApi = (apiFunction, params = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      try {
        setLoading(true);
        const result = await apiFunction(params);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    callApi();
  }, [apiFunction, params]);

  return { data, loading, error };
};
