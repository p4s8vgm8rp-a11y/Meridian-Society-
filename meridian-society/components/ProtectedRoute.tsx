import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  message?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, message }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login page with the return url and optional message
    return <Navigate to="/login" state={{ from: location, message }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;