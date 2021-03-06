import { createSlice } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase-config";

const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd);
const logIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);
const forgotPassword = (email) => sendPasswordResetEmail(auth, email);

const initialState = {
  value: {
    currentUser: false,
    loadingData: true,
  },
};
const firebaseSlice = createSlice({
  name: "firebase",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.value.currentUser = action.payload;
    },
    setLoadingData: (state, action) => {
      state.value.loadingData = action.payload;
    },
  },
});

export { signUp, logIn, forgotPassword };
export const { setLoadingData, setCurrentUser } = firebaseSlice.actions;
export default firebaseSlice.reducer;
