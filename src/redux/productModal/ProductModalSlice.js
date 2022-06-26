import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    category: undefined,
    id: undefined,
  },
};

const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
    remove: (state) => {
      state.value = initialState.value;
    },
  },
});
export const { set, remove } = productModalSlice.actions;

export default productModalSlice.reducer;
