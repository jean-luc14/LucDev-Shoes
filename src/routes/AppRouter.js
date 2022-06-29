import React from "react";
import { Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import ClientRoute from "./ClientRoute";
import AdminRoute from "./AdminRoute";
import PublicRoute from "./PublicRoute";

import Dashboard from "../pages/admin/dashboard/Dashboard";
import Products from "../pages/admin/products/Products";
import EditProduct from "../pages/admin/editProduct/EditProduct";
import AddProduct from "../pages/admin/addProduct/AddProduct";

import ProductSearch from "../components/product/ProductSearch";
import SignUp from "../pages/auth/signUp/SignUp";
import LogIn from "../pages/auth/logIn/LogIn";
import UserAccount from "../pages/account/userAccount/UserAccount";
import EditAccount from "../pages/account/editAccount/EditAccount";
import Home from "../pages/home/Home";
import CheckoutStep1 from "../pages/checkout/step1/OrderSummary";
import CheckoutStep2 from "../pages/checkout/step2/ShippingDetails";
import PageNotFound from "../pages/error/PageNotFound";
import ScrollToTop from "../components/ui/ScrollToTop";

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Routes history={history}>
      <Route path="/search" element={ScrollToTop(<Home />)} />
      <PublicRoute path="/sign-up" element={ScrollToTop(<SignUp />)} />
      <PublicRoute path="/log-in" element={ScrollToTop(<LogIn />)} />
      <ClientRoute path="/account" element={ScrollToTop(<UserAccount />)} />
      <ClientRoute
        path="/edit-account"
        element={ScrollToTop(<EditAccount />)}
      />
      <ClientRoute
        path="/checkout/step1"
        element={ScrollToTop(<CheckoutStep1 />)}
      />
      <ClientRoute
        path="/checkout/step2"
        element={ScrollToTop(<CheckoutStep2 />)}
      />
      <AdminRoute
        path="/admin/dashboard"
        element={ScrollToTop(<Dashboard />)}
      />
      <AdminRoute path="/admin/products" element={ScrollToTop(<Products />)} />
      <AdminRoute
        path="/admin/add-product"
        element={ScrollToTop(<AddProduct />)}
      />
      <AdminRoute
        path="/admin/edit-product/:id"
        element={ScrollToTop(<EditProduct />)}
      />
      <PublicRoute element={ScrollToTop(<PageNotFound />)} />
    </Routes>
  );
};

export default AppRouter;
