import { configureStore } from "@reduxjs/toolkit";

import productModalSlice from './productModal/ProductModalSlice'
import cartItemsSlide from "./shoppingCart/CartItemsSlide";
import firebaseSlice from "./firebase/FirebaseSlice";

export const store = configureStore({
  reducer: {
    productModal: productModalSlice,
    cartItems: cartItemsSlide,
    firebase: firebaseSlice,
  },
});