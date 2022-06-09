import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const activeSearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    set: (state,action) => {
      state.value = action.payload 
    }
  }
})

export const { set } = activeSearchSlice.actions;
export default activeSearchSlice.reducer;