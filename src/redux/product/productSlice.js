//get products (lastRef)
//get products success (product)
//cancel get product ()
//add product (product)
//add product success (product)
//remove product (id)
//remove product success (id)
//edit product (id,updates)
//edit product success (updates)
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    lastRefKey: null,
    total: 0,
    items: [],
  },
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductSuccess: (state, action) => {
      state.value = {
        ...state.value,
        lastRefKey: action.payload.lastRefKey,
        total: action.payload.total,
        items: [...state.value.items, ...action.payload.products],
      };
    },
    addProductSuccess: (state, action) => {
      state.value = {
        ...state.value,
        items: [...state.value.items, ...action.payload],
      };
    },
    removeProductSuccess: (state, action) => {
      state.value = {
        ...state.value,
        items: state.value.items.filter(
          (product) =>
            product.id !== action.payload.id &&
            product.category !== action.payload.category
        ),
      };
    },
    editProductSuccess: (state, action) => {
      state.value = {
        ...state.value,
        items: state.value.items.map((product) => {
          if (
            product.id !== action.payload.id &&
            product.category !== action.payload.category
          ) {
            return {
              ...product,
              ...action.payload.updates,
            };
          }
          return product;
        }),
      };
    },
  },
});

export const {
  getProductSuccess,
  addProductSuccess,
  removeProductSuccess,
  editProductSuccess,
} = productSlice.actions;
export default productSlice.reducer;
