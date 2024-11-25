import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

const PublicRoute = ({ children }) => {
  // const { isAuthenticated } = useAuth();

  const isAuthenticated = false;

  // If the user is authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default PublicRoute;
