import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = { value: items };

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    //add product to cart
    addItem: (state, action) => {
      const newItem = action.payload;

      const duplicate = findItem(state.value, newItem);

      if (duplicate.length > 0) {
        state.value = delItem(state.value, newItem);

        state.value = [
          ...state.value,
          {
            ...newItem,
            valueItemId: duplicate[0].valueItemId,
            quantity: newItem.quantity + duplicate[0].quantity,
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...newItem,
            valueItemId:
              state.value.length > 0
                ? state.value[state.value.length - 1].valueItemId + 1
                : 1,
          },
        ];
      }
      localStorage.setItem("cartItems", JSON.stringify(sortItems(state.value)));
    },

    //update a product in products of cart
    updateItem: (state, action) => {
      const itemUpdate = action.payload;
      const item = findItem(state.value, itemUpdate);

      if (item.length > 0) {
        state.value = delItem(state.value, itemUpdate);
        state.value = [
          ...state.value,
          {
            ...itemUpdate,
            valueItemId: item[0].valueItemId,
          },
        ];
      }
      localStorage.setItem("cartItems", JSON.stringify(sortItems(state.value)));
    },

    //remove product in cart
    removeItem: (state, action) => {
      const item = action.payload;
      state.value = delItem(state.value, item);
      localStorage.setItem("cartItems", JSON.stringify(sortItems(state.value)));
    },
  },
});

//find product
const findItem = (arr, item) =>
  arr.filter(
    (e) =>
      e.category === item.category &&
      e.id === item.id &&
      e.color === item.color &&
      e.size === item.size
  );

//delete product
const delItem = (arr, item) =>
  arr.filter(
    (e) =>
      e.category !== item.category ||
      e.id !== item.id ||
      e.color !== item.color ||
      e.size !== item.size
  );

//sort products
const sortItems = (arr) =>
  arr.sort((a, b) =>
    a.valueItemId > b.valueItemId ? -1 : a.valueItemId < b.valueItemId ? 1 : 0
  );

export { findItem, delItem, sortItems };
export const { addItem, updateItem, removeItem } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
