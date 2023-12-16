import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItemToCart } from "../cart/cartSlice"
import { FaStar } from "react-icons/fa"
import ContentLoader from "react-content-loader"
import SortSelect from "../sort/sortSelect"
import Category from "../category/Category"
import { sortProducts } from "../sort/sortUtils"
import { filterByCategory } from "../category/filterUtil"
import { selectSortOrder } from "../sort/sortSlice"
import { selectCategoryFilter } from "../category/categorySlice"
import { selectSearhTerm } from "../search/searchSlice"

const ProductList = ({ onSearch }) => {
  const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const sortOrder = useSelector(selectSortOrder)
  const categoryFilter = useSelector(selectCategoryFilter)
  const searchTerm = useSelector(selectSearhTerm)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()

        const modifiedData = data.map((product) => {
          if (
            product.category === "men's clothing" ||
            product.category === "women's clothing"
          ) {
            return { ...product, category: "clothing" }
          }
          return product
        })
        let filteredProducts = filterByCategory(modifiedData, categoryFilter)
        filteredProducts = sortProducts(filteredProducts, sortOrder)
        if (searchTerm) {
          filteredProducts = filteredProducts.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        }
        setProducts(filteredProducts)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [sortOrder, categoryFilter, searchTerm])

  const handleBuy = (product) => {
    dispatch(addItemToCart(product))
  }

  return (
    <div className=" w-full h-full ">
      <div className="flex justify-end mt-10 gap-10">
        <Category />
        <SortSelect />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 py-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border shadow p-4 w-full"
              >
                <ContentLoader
                  speed={2}
                  width={"100%"}
                  height={400}
                  viewBox="'0 0 100% 400"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="0" y="0" rx="5" ry="5" width="100%" height="300" />

                  <rect x="0" y="310" rx="4" ry="4" width="80%" height="15" />

                  <rect x="0" y="330" rx="4" ry="4" width="60%" height="10" />

                  <rect x="0" y="350" rx="4" ry="4" width="30%" height="10" />

                  <rect x="0" y="370" rx="4" ry="4" width="50%" height="10" />
                </ContentLoader>
              </div>
            ))
          : products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl border shadow p-4 w-full"
                >
                  <div className=" relative w-[80%] h-[350px] mx-auto overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full bg-blue-700 text-white hover:bg-blue-800 rounded-lg text-sm py-3 px-8"
                    onClick={() => handleBuy(product)}
                  >
                    BUY NOW
                  </button>
                  <div className="flex flex-col gap-2 mt-5 mb-4">
                    <h3 className="font-bold">{product.title}</h3>
                    <h4 className="text-gray-500">{product.category}</h4>
                    <div className="flex items-center gap-1 text-yellow-400">
                      {Array.from(
                        { length: product.rating.rate },
                        (_, index) => (
                          <FaStar
                            className="w-5 h-5 fill-current"
                            key={index}
                          />
                        )
                      )}
                    </div>
                  </div>

                  <h3>${product.price}</h3>
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default ProductList
