import { configureStore } from "@reduxjs/toolkit";

import productModalSlice from './productModal/ProductModalSlice'
import cartItemsSlide from "./shoppingCart/CartItemsSlide";

export const store = configureStore({
  reducer: {
    productModal: productModalSlice,
    cartItems: cartItemsSlide,
  },
});