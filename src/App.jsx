import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import ProductList from "./features/productlist/ProductList"
import CartModal from "./features/cart/CartModal"

function App() {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const handleOpenModal = () => {
    setIsOpenModalCart(true)
  }
  const handleHideModal = () => {
    setIsOpenModalCart(false)
  }

  const handleSearch = (value) => {
    setSearchTerm(value)
  }

  return (
    <>
      {isOpenModalCart ? <CartModal handleHideModal={handleHideModal} /> : null}
      <Header handleOpenModal={handleOpenModal} />
      <main className="max-w-8xl mx-auto px-4">
        <ProductList onSearch={searchTerm} />
      </main>
    </>
  )
}

export default App
