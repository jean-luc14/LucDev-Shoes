import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import Contact from "../components/Contact";
import SearchResults from "../pages/SearchResults";
import About_us from "../components/About_us";
import B from "../Composants-de-chaussures/Oxford/B";
import PageNotFound from "../pages/PageNotFound";
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import UserConnected from "../pages/private/userConnected/UserConnected";
import CheckoutCart from "../pages/private/userConnected/cart/CheckoutCart";
import OrderCompleteCart from "../pages/private/userConnected/cart/OrderCompleteCart";
import Admin from "../pages/private/admin/Admin";
import AddProduct from "../pages/private/admin/management/AddProduct";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog=:catalogSlug&id=:id" element={<ProductPage />} />
      <Route path="/catalog=:catalogSlug" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About_us />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search=:value" element={<SearchResults />} />
      <Route path="/Composants-de-chaussures/Oxford/B" element={<B />} />
      <Route path="/user-connected" element={<UserConnected />}>
        <Route
          path="/user-connected/checkout-cart"
          element={<CheckoutCart />}
        />
        <Route
          path="/user-connected/order-complete-cart"
          element={<OrderCompleteCart />}
        />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route path="/admin/add-product" element={<AddProduct />} />
      </Route>
      <Route element={<PageNotFound />} />
    </Routes>
  );
};

export default Routing;
