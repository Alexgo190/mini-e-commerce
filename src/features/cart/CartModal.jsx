import React from "react"
import Modal from "../../components/Modal"
import {
  addItemToCart,
  removeItemFromCart,
  selectorCartItems,
  selectorTotalItems,
  selectorTotalPrices,
} from "./cartSlice"
import { useSelector, useDispatch } from "react-redux"

const CartModal = ({ handleHideModal }) => {
  const cartItems = useSelector(selectorCartItems)
  const totalItems = useSelector(selectorTotalItems)
  const totalPrice = useSelector(selectorTotalPrices)
  const dispatch = useDispatch()

  const handleRemoveItem = (itemToRemove) => {
    dispatch(removeItemFromCart(itemToRemove))
  }

  const handleAddItem = (itemToAdd) => {
    dispatch(addItemToCart(itemToAdd))
  }

  const handleCheckoutToWhatsapp = () => {
    if (totalItems === 0) return

    const phoneNumber = "6281285241889"
    const message = encodeURIComponent(
      `Halo saya ingin membeli ${totalItems} barang dengan total harga ${totalPrice}`
    )

    const URL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`

    window.open(URL, "_blank")
  }

  return (
    <Modal>
      <div className="flex flex-col gap-6 p-1 sm:p-2 w-full lg:w-[900px]">
        <div className="flex flex-col gap-6 max-h-[500px] overflow-auto">
          {cartItems.map((product) => {
            return (
              <div
                key={product.id}
                className="w-full border-b-4 border-blue-200 pb-4"
              >
                <div className="flex items-center w-full">
                  <div className="w-[120px] h-auto overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-10 w-[75%]">
                    <h3 className="capitalize mt-3 text-lg">{product.title}</h3>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm">{product.price}</h4>
                      <h3 className="text-lg font-bold">
                        {product.totalPrice}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 mt-4 ml-auto">
                      <button
                        type="button"
                        className="rounded-full bg-blue-400 w-5 h-5 text-white flex items-center justify-center"
                        onClick={() => handleRemoveItem(product.id)}
                      >
                        -
                      </button>
                      <h3>{product.quantity}</h3>
                      <button
                        type="button"
                        className="rounded-full bg-blue-400 w-5 h-5 text-white flex items-center justify-center"
                        onClick={() => handleAddItem(product)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div>
          <h3 className="text-md font-bold">Total Item : {totalItems}</h3>
          <h3 className="text-md font-bold">Total Prices : {totalPrice}</h3>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-slate-600 hover:bg-slate-800 text-white py-3 px-8 rounded-xl text-sm"
            onClick={handleHideModal}
          >
            Close
          </button>
          {totalItems > 0 ? (
            <button
              type="button"
              className="bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-xl text-sm"
              onClick={handleCheckoutToWhatsapp}
            >
              Checkout To Whatsapp
            </button>
          ) : null}
        </div>
      </div>
    </Modal>
  )
}

export default CartModal
