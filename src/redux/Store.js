import { configureStore } from "@reduxjs/toolkit";

import productModalSlice from './productModal/ProductModalSlice'

export const store = configureStore({
  reducer: {
    productModal:productModalSlice,
  }
})