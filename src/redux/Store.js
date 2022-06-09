import { configureStore } from "@reduxjs/toolkit";

import productSlice from './product/ProductSlice'
import cartItemsSlice from "./shoppingCart/CartItemsSlice";
import totalSlice from "./shoppingCart/TotalSlice";
import firebaseSlice from "./firebase/FirebaseSlice";
import activeSearch from "./search/ActiveSearchSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    cartItems: cartItemsSlice,
    total: totalSlice,
    firebase: firebaseSlice,
    search: activeSearch,
  },
});