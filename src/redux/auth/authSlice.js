//sign out ()
//log in success (auth)
//sign up success
//sign out success ()
//set auth persistence ()
//set auth status (status)
// on auth state changed ()
// on auth state success (user)
// on auth state fail (error)
// rest password (email)
// is authenticating (bool=true)
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogInSuccess: (state, action) => {
      state.value = {
        id: action.payload.id,
        role: action.payload.role,
        provider: action.payload.provider,
      };
    },
    setSignOutSuccess: (state) => {
      state.value = {};
    },
  },
});

export const { setLogInSuccess, setSignOutSuccess } = authSlice.actions;
export default authSlice.reducer;
