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

  const [tokenUser, setTokenUser] = useState(null);
  const [tokenInitial, setTokenInitial] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentDate = new Date();
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        console.log("Token expired.");
        handleLogout();
      } else {
        setTokenUser(decodedToken);
        setTokenInitial(token);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
    setTokenUser(null);
    setTokenInitial("");
    navigate("/", { replace: true });
  };

  const handleLogin = (data) => {
    setUserInfo(data);
    setIsLoggedIn(true);
    navigate("/", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        handleLogout,
        handleLogin,
        userInfo,
        tokenUser,
        tokenInitial,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
