import { useState, useEffect } from 'react';
import UserService from '../services/UserService';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await UserService.verifyLogin();
        setIsAuthenticated(response ? true : false);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, []);

  const logout = async () => {
    setIsAuthenticated(false);
    await UserService.logout();
  }

  return { isAuthenticated, isLoading, logout };
};

export default useAuth;
