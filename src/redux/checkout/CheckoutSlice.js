import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    shipping: {},
    payment: {
      type: "paypal",
      data: {},
    },
  },
};
const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setShipping: (state, action) => {
      state.value = { ...state.value, shipping: action.payload };
    },
    setPayment: (state, action) => {
      state.value = { ...state.value, payment: action.payload };
    },
    resetCheckout: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { setShipping, setPayment, resetCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
