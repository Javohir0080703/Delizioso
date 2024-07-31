import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const a = true
  return a ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
