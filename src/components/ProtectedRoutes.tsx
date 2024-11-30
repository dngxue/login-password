import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';
import useAuth from '../hooks/useAuth';
import Loading from './Loading';

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if(isLoading) {
    return (
      <Loading message='Verificando autenticación'/>
    )
  }

  return isAuthenticated ? element : <Navigate to="/" />;
};



export default ProtectedRoute;
