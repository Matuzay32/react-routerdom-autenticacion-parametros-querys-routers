import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import useAuth from "./../auth/hooks/useAuth";

// const user = { id: 1, username: "Matuzay32" };

export default function PrivateRoute({ children }) {
  const { user, login, logout, isLoged } = useAuth();

  return isLoged() ? children : <Navigate to="/login" />;
}
