//set profile (user)
//clear profile ()
//update email (password,newEmail)
// update profile (newProfile)
// update profile success (update)
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: {},
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.value = action.payload;
    },
    updateProfile: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
    clearProfile: (state) => {
      state.value = {};
    },
  },
});

export const { setProfile, updateProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
