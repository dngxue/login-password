import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await UserService.verifyLogin();
        
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    verifyAuth();
  }, []);

  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
