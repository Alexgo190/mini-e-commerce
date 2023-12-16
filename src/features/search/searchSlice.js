import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  searchTerm: "",
}

const searchSlice = createSlice({
  name: "seach",
  initialState: initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
  },
})

export const { setSearchTerm } = searchSlice.actions

export const selectSearhTerm = (state) => state.search.searchTerm

export default searchSlice
