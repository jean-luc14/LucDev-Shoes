import { createSlice } from '@reduxjs/toolkit'

const totalData = localStorage.getItem('total') !== null ?
  JSON.parse(localStorage.getItem('total')) : { 
    totalPrice: 0,
    totalProduct: 0,
  }

const initialState = {
  value: totalData,
};

export const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: { 
    updateTotal: (state,action) => {
      state.value = { ...state.value, ...action.payload };
      localStorage.setItem("total", JSON.stringify(state.value));
    }
  } 
})

export const { updateTotal } = totalSlice.actions;

export default totalSlice.reducer;