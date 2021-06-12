import { useEffect, useState } from 'react';

const useWidth = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  const changeWindowSize = () => {
    setWindowSize({ width: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener('resize', changeWindowSize);
    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return windowSize;
};

export default useWidth;
