import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

const PrivateRoute = () => {
  // const { isAuthenticated } = useAuth();

  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;