import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RouteApp from "./components/RouteApp";
import AuthProvider from "./auth/authProvidersContext/AuthProvider";

export default function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <RouteApp />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
