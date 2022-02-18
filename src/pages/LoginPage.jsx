import React from "react";
import useAuth from "./../auth/hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const auth = useAuth();

  const handdleLogin = () => {
    auth.login();

    navigate("/dashboard");
  };

  return (
    <div>
      LoginPage
      <button onClick={() => handdleLogin()}>Login</button>
    </div>
  );
}
