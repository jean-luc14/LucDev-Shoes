import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import Basket from "../components/basket/Basket";
import Footer from "../components/ui/Footer";
import Navigation from "../components/ui/Navigation";

const PublicRoutes = ({
  isAuth,
  userType,
  component: Component,
  path,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      element={(props) => {
        const { from } = props.location.state || { from: { pathname: "/" } };
        return isAuth && userType === "ADMIN" ? (
          <Navigate to="/admin/dashboard" />
        ) : isAuth &&
          userType === "USER" &&
          (path === "sign-up" || path === "log-in") ? (
          <Navigate to={from} />
        ) : (
          <>
            <Navigation path={path} isAuth={isAuth} />
            <Basket isAuth={isAuth} />
            <main className="content">
              <Component {...props} />
            </main>
            <Footer path={path} />
          </>
        );
      }}
    />
  );
};

const mapStateToProps = ({ auth }) => ({
  isAuth: !!auth.id && !!auth.role,
  userType: auth.role,
});

export default connect(mapStateToProps)(PublicRoutes);
