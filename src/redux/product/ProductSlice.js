import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    catalogSlug: undefined,
    id:undefined
  }
}


const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = {...state.value, ...action.payload};
    },
    remove: (state) => {
      state.value = initialState.value;
    }
  }
})
export const { set,remove } = productSlice.actions

export default productSlice.reducer