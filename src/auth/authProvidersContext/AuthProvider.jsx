import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(user) || null);
    } catch (error) {
      localStorage.removeItem("user");
      console.log(error);
    }

    return () => {};
  }, [user]);

  const contextValue = {
    user,

    login() {
      setUser({ id: 1, username: "matuzay32" });
    },

    logout() {
      setUser(null);
    },

    isLoged() {
      return !!user;
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
