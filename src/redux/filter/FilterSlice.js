//set min price filter (min)
//set max price filter (max)
//reset filter ()
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    minPrice: 0,
    maxPrice: 0,
  },
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setMinPrice: (state, action) => {
      state.value = { ...state.value, minPrice: action.payload };
    },
    setMaxPrice: (state, action) => {
      state.value = { ...state.value, maxPrice: action.payload };
    },
    resetFilter: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { setMinPrice, setMaxPrice, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
