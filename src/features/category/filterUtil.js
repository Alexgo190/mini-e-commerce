export const filterByCategory = (products, categoryFilter) => {
  return categoryFilter === "All Categories"
    ? [...products]
    : products.filter((product) => product.category === categoryFilter)
}
