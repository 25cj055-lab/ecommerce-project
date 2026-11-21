import Products from '../components/Products'

function ProductsPage({ products, search, setSearch, addToCart }) {
  return (
    <Products
      products={products}
      search={search}
      setSearch={setSearch}
      addToCart={addToCart}
    />
  )
}

export default ProductsPage