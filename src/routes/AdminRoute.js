import React from "react";
import AdminNavbar from "../components/ui/AdminNavbar";
import AdminPanel from "../components/ui/AdminPanel";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const AdminRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector(
    (state) => !!state.auth.id && state.auth.role === "ADMIN"
  );
  return (
    <Route
      {...rest}
      element={(props) =>
        isAuth ? (
          <>
            <AdminNavbar />
            <main className="content_admin">
              <AdminPanel />
              <div className="content_admin_wrapper">
                <Component {...props} />
              </div>
            </main>
          </>
        ) : (
          <Navigate to="/" />
        )
      }
    />
  );
};
