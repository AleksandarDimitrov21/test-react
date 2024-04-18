import React from "react";

import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext ";

const ProtectedRoute = ({ children }) => {
  const { userInfo } = useAuth();

  return userInfo ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
