import { IoCart } from "react-icons/io5"
import { useSelector } from "react-redux"
import { selectorTotalItems } from "../features/cart/cartSlice"
import Search from "../features/search/Search"

const Header = ({ handleOpenModal }) => {
  const cartTotalItems = useSelector(selectorTotalItems)

  return (
    <header className="bg-blue-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 ">
          <h1 className="text-3xl font-bold text-gray-100">
            Simple E-Commerce
          </h1>
          <Search />
          <button
            type="button"
            className="relative rounded-full bg-blue-800 p-2 text-gray-100"
            onClick={handleOpenModal}
          >
            {cartTotalItems > 0 ? (
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-600 text-white text-sm flex items-center justify-center">
                {cartTotalItems}
              </span>
            ) : null}
            <IoCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
