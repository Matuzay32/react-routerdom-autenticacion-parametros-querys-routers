import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../auth/hooks/useAuth";

export default function NavBar() {
  const auth = useAuth();

  const handdleLogout = () => {
    auth.logout();
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink className="estilosLinks" to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className="estilosLinks" to="/contact">
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink className="estilosLinks" to="/about">
            about
          </NavLink>
        </li>

        <li>
          <NavLink className="estilosLinks" to="/categories">
            Categories
          </NavLink>
        </li>

        {!auth.isLoged() && (
          <li>
            <NavLink className="estilosLinks" to="/login">
              Login
            </NavLink>
          </li>
        )}
        {auth.isLoged() ? (
          <li>
            <NavLink className="estilosLinks" to="/dashboard">
              DashBoard
            </NavLink>
          </li>
        ) : null}

        {!auth.isLoged() && (
          <li>
            <NavLink className="estilosLinks" to="/register">
              Register
            </NavLink>
          </li>
        )}
        {auth.isLoged() && (
          <li>
            <NavLink className="estilosLinks" to="/payments">
              Payments
            </NavLink>
          </li>
        )}

        {!!auth.isLoged() && (
          <li>
            <button onClick={() => handdleLogout()}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
