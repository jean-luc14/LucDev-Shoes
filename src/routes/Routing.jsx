import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import ProductPage from '../pages/ProductPage'
import Contact from "../components/Contact";
import About_us from "../components/About_us";
import B from "../Composants-de-chaussures/Oxford/B";
import PageNotFound from "../pages/PageNotFound";
import { NavbarData } from '../Assets/data/NavbarData'
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";


//Import of diiferents catalogs components
// import Active_sandals from "../pages/catalog/Active_sandals";
// import Active_sneakers from "../pages/catalog/Active_sneakers";
// import At_home_shoes from "../pages/catalog/At_home_shoes";
// import Casual_lace_up_sneakers from "../pages/catalog/Casual_lace_up_sneakers";
// import Casual_slip_on_shoes from "../pages/catalog/Casual_slip_on_shoes";
// import Casual_slip_on_sneakers from "../pages/catalog/Casual_slip_on_sneakers";
// import Chelsea_style_boots from "../pages/catalog/Chelsea_style_boots";
// import Chukkas from "../pages/catalog/Chukkas";
// import Derby_shoes from "../pages/catalog/Derby_shoes";
// import Loafers from "../pages/catalog/Loafers";
// import Mocassins from "../pages/catalog/Mocassins";
// import Oxfords from "../pages/catalog/Oxfords";
// import Slides from "../pages/catalog/Slides";
// import Toe_post_sandals from "../pages/catalog/Toe_post_sandals";
// import Walking_shoes from "../pages/catalog/Walking_shoes";



const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:catalogSlug" element={<Catalog />} />
      <Route path="/:catalogSlug/:id" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/About_us" element={<About_us />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Composants-de-chaussures/Oxford/B" element={<B />} />
      {/* <Route path="/active-sandals" element={<Active_sandals />} />
      <Route path="/active-sneakers" element={<Active_sneakers />} />
      <Route path="/at-home-shoes" element={<At_home_shoes />} />
      <Route
        path="/casual-lace-up-sneakers"
        element={<Casual_lace_up_sneakers />}
      />
      <Route path="/casual-slip-on-shoes" element={<Casual_slip_on_shoes />} />
      <Route
        path="/casual-slip-on-sneaker"
        element={<Casual_slip_on_sneakers />}
      />
      <Route path="/chelsea-style-boots" element={<Chelsea_style_boots />} />
      <Route path="/Chukkas" element={<Chukkas />} />
      <Route path="/derby-shoes" element={<Derby_shoes />} />
      <Route path="/loafers" element={<Loafers />} />
      <Route path="/mocassins" element={<Mocassins />} />
      <Route path="/oxfords" element={<Oxfords />} />
      <Route path="/slides" element={<Slides />} />
      <Route path="/toe-post-sandals" element={<Toe_post_sandals />} />
      <Route path="/walking-shoes" element={<Walking_shoes />} /> */}
      <Route element={<PageNotFound />} />
      {/* {NavbarData.map((e, i) => {
        <Route key={i} path={e.path} element={<{e.display}/>
      })} */}
    </Routes>
  );
}

export default Routing ;