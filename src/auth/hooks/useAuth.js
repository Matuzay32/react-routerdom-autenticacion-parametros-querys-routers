import React, { useContext } from "react";
import { AuthContext } from "./../authProvidersContext/AuthProvider";

export default function useAuth() {
  const contexValue = useContext(AuthContext);

  return contexValue;
}
