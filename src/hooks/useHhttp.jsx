import { useEffect, useState } from 'react';

export const useHhttp = (fn, params) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fn(params).then(setData).catch(setError);
  }, [fn, params]);

  return [data, setData, error];
};
