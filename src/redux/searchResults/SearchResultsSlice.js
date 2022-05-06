import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value:[]
}

const searchResultsSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchResults: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { searchResults } = searchResultsSlice.actions
export default searchResultsSlice.reducer;