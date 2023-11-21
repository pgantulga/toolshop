import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

const PrivateRoutes = () => {
  const [user, setUser] = useState(null);
  const getUserFromSessionStorage = () => {
    try {
      const userString = sessionStorage.getItem("user"); // Get user from session storage
      const user = JSON.parse(userString); // Parse user to JSON
      return user;
    } catch (error) {
      sessionStorage.setItem("user", ""); // Clear session storage
      return null;
    }
  };
  useEffect(() => {
    const user = getUserFromSessionStorage();
    if (user) {
      setUser(user);
    }
  }, []);
  const location = useLocation();

  return (
    !user
      ? <Navigate to="/login" state={{ from: location }} replace />
      : <Outlet />
  )
}

export default PrivateRoutes