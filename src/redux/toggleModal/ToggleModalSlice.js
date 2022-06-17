import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    signUpModal: false,
    logInModal: false,
    forgetPassModal: false,
  },
};

const toggleModalSlice = createSlice({
  name: "toggleModal",
  initialState,
  reducers: {
    toggle_sign: (state) => {
      state.value = {
        signUpModal: !state.value.signUpModal,
        logInModal: false,
        forgetPassModal: false,
      };
    },
    toggle_log: (state) => {
      state.value = {
        signUpModal: false,
        logInModal: !state.value.logInModal,
        forgetPassModal: false,
      };
    },
    toggle_forget: (state) => {
      state.value = {
        signUpModal: false,
        logInModal: false,
        forgetPassModal: !state.value.forgetPassModal,
      };
    },
  },
});

export const { toggle_sign, toggle_log, toggle_forget } =
  toggleModalSlice.actions;
export default toggleModalSlice.reducer;
