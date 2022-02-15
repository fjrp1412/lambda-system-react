import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AppContext } from '../context';

function UserAuth({ children }) {
  const location = useLocation();
  const { auth } = useContext(AppContext);

  if (!auth) {
    console.log('no auth');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export { UserAuth };
