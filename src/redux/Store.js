import { configureStore } from "@reduxjs/toolkit";

import productSlice from './product/ProductSlice'
import cartItemsSlice from "./shoppingCart/CartItemsSlice";
import firebaseSlice from "./firebase/FirebaseSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    cartItems: cartItemsSlice,
    firebase: firebaseSlice,
  },
});