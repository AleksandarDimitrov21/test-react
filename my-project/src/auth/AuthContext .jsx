import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("jwtToken") ? true : false
  );
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  const checkUserRole = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      const currentDate = new Date();
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        console.log("Token expired.");
        handleLogout();
      } else {
        setIsLoggedIn(true);
        setUserType(decodedToken.userType);
      }
    } catch (error) {
      console.error("Failed to decode token", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      checkUserRole(token);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
    setUserType(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, handleLogout, userType, setUserType }}
    >
      {children}
    </AuthContext.Provider>
  );
};
