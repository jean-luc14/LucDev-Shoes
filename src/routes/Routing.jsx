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
import PrivateCart from "../pages/private/privateCart/PrivateCart";

const Routing = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:catalogSlug" element={<Catalog />} />
      <Route path="/:catalogSlug/:id" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About_us />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<SearchResults />}/>
      <Route path="/Composants-de-chaussures/Oxford/B" element={<B />} />
      <Route path='/private' element={<Private/>}>
        <Route path='/private/private-cart' element={<PrivateCart/>}/>
      </Route>
      <Route element={<PageNotFound />} />
    </Routes>
  );
}

export default Routing ;