import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  order: "default",
}

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortOrder: (state, action) => {
      state.order = action.payload
    },
  },
})

export const { setSortOrder } = sortSlice.actions
export const selectSortOrder = (state) => state.sort.order

export default sortSlice
