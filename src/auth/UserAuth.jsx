import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function UserAuth({ children }) {
  const auth = false;
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export { UserAuth };
