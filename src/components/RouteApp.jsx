import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import CoantactPage from "../pages/CoantactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import NavBar from "./NavBar";
import ProfilePage from "./ProfilePage";
import CategorisPage from "./../pages/CategorisPage";
import RegisterPage from "./../pages/RegisterPage";
import LoginPage from "./../pages/LoginPage";
import DashboardPage from "./../pages/DashboardPage";
import PaymentsPage from "./../pages/PaymentsPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function RouteApp() {
  const [subCategories, setSubCategories] = useState("");

  return (
    <div>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>

        <Route
          exact
          path="/profile/:username"
          element={<ProfilePage />}></Route>

        <Route exact path="/about" element={<AboutPage />}></Route>

        <Route exact path="/contact" element={<CoantactPage />}></Route>

        <Route
          path="/categories/*"
          element={
            <div>
              <CategorisPage />

              <CategoriesRouter />
            </div>
          }></Route>

        <Route
          exact
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }></Route>

        <Route
          exact
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }></Route>

        <Route
          exact
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }></Route>

        <Route
          exact
          path="/payments"
          element={
            <PrivateRoute>
              <PaymentsPage />
            </PrivateRoute>
          }></Route>

        <Route exact path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

function CategoriesRouter() {
  const location = useLocation();

  return (
    <div>
      <ul>
        <li>
          <Link className="estilosLinks" to="/categories/terror">
            Terror
          </Link>
        </li>

        <li>
          <Link className="estilosLinks" to="/categories/accion">
            Accion
          </Link>
        </li>
        <li>
          <Link className="estilosLinks" to="/categories/comedia">
            Comedia
          </Link>
        </li>
      </ul>

      <PrivateRoute>
        <Routes>
          <Route
            className="estilosLinks"
            path="/terror/*"
            element={<SubCategoriesTerror />}></Route>

          <Route
            className="estilosLinks"
            path="/accion"
            element={<h1>accion</h1>}></Route>

          <Route
            exact
            className="estilosLinks"
            path="/comedia"
            element={<h1>comedia</h1>}></Route>
        </Routes>
      </PrivateRoute>
    </div>
  );
}

function SubCategoriesTerror() {
  return (
    <div>
      <ul>
        <li>
          <Link className="estilosLinks" to="/categories/terror/supenso">
            supenso
          </Link>
        </li>

        <li>
          <Link className="estilosLinks" to="/categories/terror/gore">
            Gore
          </Link>
        </li>
      </ul>

      <PrivateRoute>
        <Routes>
          <Route
            className="estilosLinks"
            path="/supenso"
            element={<h1>supenso</h1>}></Route>

          <Route
            exact
            className="estilosLinks"
            path="/gore"
            element={<h1>gore</h1>}></Route>
        </Routes>
      </PrivateRoute>
    </div>
  );
}
