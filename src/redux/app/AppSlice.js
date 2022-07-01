import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    loading: true,
    isAuthenticating: false,
    authStatus: {},
    requestStatus: null,
    theme: "default",
  },
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsAuthentication: (state, action) => {
      state.value = { ...state.value, isAuthenticating: action.payload };
    },
    setLoading: (state, action) => {
      state.value = { ...state.value, loading: action.payload };
    },
    setRequestStatus: (state, action) => {
      state.value = { ...state.value, requestStatus: action.payload };
    },
    setAuthStatus: (state, action) => {
      state.value = { ...state.value, authStatus: action.payload };
    },
  },
});

export const {
  setIsAuthentication,
  setLoading,
  setRequestStatus,
  setAuthStatus,
} = appSlice.actions;
export default appSlice.reducer;
