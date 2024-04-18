import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext ";

const AdminProtected = ({ children }) => {
  const { userInfo } = useAuth();
  return userInfo?.userType === "ADMIN" ? children : <Navigate to="/login" />;
};

export default AdminProtected;
