//register user (user)
//get user (uId)
//add user (user)
//edit user (updates)
//delete user (Uid)

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    EditUser: (state, action) => {
      state.value = state.value.map((user) => {
        if (user.id === action.payload) {
          return {
            ...user,
            ...action.payload,
          };
        }
        return user;
      });
    },
    DeleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, EditUser, DeleteUser } = userSlice.actions;
export default userSlice.reducer;
