import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!token && !userInfo?.userType) {
      return;
    }

    const decodedToken = jwtDecode(token);
    const currentDate = new Date();
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      console.log("Token expired.");
      handleLogout();
    } else {
      axios
        .get(`http://localhost:8080/user/${decodedToken.jti}`)
        .then(({ data }) => {
          setUserInfo(data);
        });
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setUserInfo(null);
    navigate("/", { replace: true });
  };

  const handleLogin = (data, token) => {
    if (typeof token === "string" && token.trim() !== "") {
      localStorage.setItem("jwtToken", token);
      setUserInfo(data);
      navigate("/", { replace: true });
    } else {
      console.error("Invalid token", token);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogout,
        handleLogin,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
