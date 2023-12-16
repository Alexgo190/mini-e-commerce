export const sortProducts = (products, sortOrder) => {
  let sortedProducts = [...products]

  switch (sortOrder) {
    case "asc":
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title))
      break
    case "desc":
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title))
      break
    case "priceHigh":
      sortedProducts.sort((a, b) => b.price - a.price)
      break
    case "priceLow":
      sortedProducts.sort((a, b) => a.price - b.price)
      break

    default:
      break
  }

  return sortedProducts
}
