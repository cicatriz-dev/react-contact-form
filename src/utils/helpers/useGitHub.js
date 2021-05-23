import axios from 'axios';
import { useEffect, useState } from 'react';

const useGitHub = (user) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      axios
        .get(`https://api.github.com/users/${user}`)
        .then((res) => {
          setIsLoading(false);
          setResponse(res.data);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    };
    fetchData();
  }, []);

  return { response, error, isLoading };
};

export default useGitHub;
