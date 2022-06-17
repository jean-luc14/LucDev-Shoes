import { configureStore } from "@reduxjs/toolkit";

import productModalSlice from "./productModal/ProductModalSlice";
import cartItemsSlice from "./shoppingCart/CartItemsSlice";
import totalSlice from "./shoppingCart/TotalSlice";
import firebaseSlice from "./firebase/FirebaseSlice";
import activeSearch from "./search/ActiveSearchSlice";

export const store = configureStore({
  reducer: {
    productModal: productModalSlice,
    cartItems: cartItemsSlice,
    total: totalSlice,
    firebase: firebaseSlice,
    search: activeSearch,
  },
});
