// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/check-auth`, {
          withCredentials: true, // 👈 ye cookie ko bhejta hai backend ko
        });
        setIsAuth(true);
      } catch (err) {
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuth === null) return <p>Loading...</p>; // jab tak check ho raha hai
  if (isAuth === false) return <Navigate to="/login" />;

  return children; // agar login hai to show the protected page
};

export default ProtectedRoute;
