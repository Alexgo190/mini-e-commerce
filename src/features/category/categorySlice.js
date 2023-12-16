import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filter: "All Categories",
}

export const categoryFilter = createSlice({
  name: "category",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const { setFilter } = categoryFilter.actions

export const selectCategoryFilter = (state) => state.category.filter

export default categoryFilter
