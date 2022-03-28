import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  catalogSlugValue: null,
  idValue:null
}


const productModalSlice = createSlice({
  name: 'productModal',
  initialState,
  reducers: {
    setCatalog: (state, action) => {
      state.catalogSlugValue = action.payload;
    },
    setId: (state, action) => {
      state.idValue = action.payload;
    },
    remove: (state) => {
      state.IdValue = null;
      state.catalogSlugValue = null;
    }
  }
})
export const { setId,setCatalog,remove } = productModalSlice.actions

export default productModalSlice.reducer