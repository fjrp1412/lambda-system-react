import { useState, useEffect } from 'react';

const useAuth = ({ token }) => {
  const [auth, setAuth] = useState();

  useEffect(() => {
    setAuth(!!token);
  }, [token]);

  return [auth, setAuth];
};

export { useAuth };
