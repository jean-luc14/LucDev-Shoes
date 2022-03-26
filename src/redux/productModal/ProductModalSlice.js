import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  catalogSlugValue: true,
  idValue: true,
}

const productModalSlice = createSlice({
  name: 'productModal',
  initialState,
  reducers: {
    set: (state, action) => {
      state.catalogSlugValue = action.payload.catalogSlug;
      state.idValue = action.payload.id;
    },
    remove: (state) => {
      state.catalogSlugValue = null;
      state.idValue = null;
    }
  }
})
export const { set, remove } = productModalSlice.actions

export default productModalSlice.reducer