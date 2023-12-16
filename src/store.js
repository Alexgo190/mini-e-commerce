import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./features/cart/cartSlice"
import sortSlice from "./features/sort/sortSlice"
import categoryFilter from "./features/category/categorySlice"
import searchSlice from "./features/search/searchSlice"

export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
    sort: sortSlice.reducer,
    category: categoryFilter.reducer,
    search: searchSlice.reducer,
  },
})
