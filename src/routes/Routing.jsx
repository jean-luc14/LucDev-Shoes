import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import ProductPage from '../pages/ProductPage'
import Contact from "../components/Contact";
import SearchResults from "../pages/SearchResults";
import About_us from "../components/About_us";
import B from "../Composants-de-chaussures/Oxford/B";
import PageNotFound from "../pages/PageNotFound";
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import Private from "../pages/private/Private";
import CheckoutCart from "../pages/private/privateCart/CheckoutCart";
import OrderCompleteCart from "../pages/private/privateCart/OrderCompleteCart";

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
      <Route path="/private" element={<Private />}>
        <Route path="/private/checkout-cart" element={<CheckoutCart />} />
        <Route path="/private/order-complete-cart" element={<OrderCompleteCart />} />
      </Route>
      <Route element={<PageNotFound />} />
    </Routes>
  );
}

export default Routing ;