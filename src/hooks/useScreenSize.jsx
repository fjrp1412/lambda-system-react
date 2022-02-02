import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [size, setSize] = useState();

  useEffect(() => {
    const screenSize = window.screen.width;
    setSize(screenSize);
  }, []);

  return [size, setSize];
};

export { useScreenSize };
