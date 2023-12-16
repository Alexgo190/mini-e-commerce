import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload
      const selectedItem = state.cartItems.findIndex(
        (product) => product.id === newItem.id
      )
      if (selectedItem === -1) {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        })
      } else {
        state.cartItems[selectedItem].quantity += 1
        state.cartItems[selectedItem].totalPrice =
          state.cartItems[selectedItem].quantity * newItem.price
      }
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload
      const selectedItem = state.cartItems.find(
        (product) => product.id === itemIdToRemove
      )

      if (selectedItem) {
        if (selectedItem.quantity > 1) {
          selectedItem.quantity -= 1
          selectedItem.totalPrice = selectedItem.price * selectedItem.quantity
        } else {
          state.cartItems = state.cartItems.filter(
            (product) => product.id !== itemIdToRemove
          )
        }
      }
    },
  },
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions

export default cartSlice

//selector

export const selectorCartItems = (state) => state.cart.cartItems
export const selectorTotalItems = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
export const selectorTotalPrices = (state) =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
