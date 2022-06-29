import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import Basket from "../components/basket/Basket";
import Footer from "../components/ui/Footer";
import Navigation from "../components/ui/Navigation";

const PrivateRoute = ({
  isAuth,
  userType,
  component: Component,
  path,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      element={(props) =>
        isAuth && userType === "USER" ? (
          <>
            <Navigation path={path} isAuth={isAuth} />
            <Basket isAuth={isAuth} />
            <main className="content">
              <Component {...props} />
            </main>
            <Footer path={path} />
          </>
        ) : isAuth && userType === "ADMIN" ? (
          <Navigate to="admin/dashboard" />
        ) : (
          <Navigate
            to={{
              pathname: "log-in",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = ({ auth }) => ({
  isAuth: !!auth.id && !!auth.role,
  userType: auth.role,
});

export default connect(mapStateToProps)(PrivateRoute);
