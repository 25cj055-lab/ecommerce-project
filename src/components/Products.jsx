
import { useState } from 'react'
import Categories from './Categories'

function Products({ products, search, setSearch, addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      selectedCategory === 'All' ||
      product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <section id="products">
      <h2>Our Products</h2>

      <input
        type="text"
        className="search-bar"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <p className="product-category">
                {product.category}
              </p>

              <p className="product-description">
                {product.description}
              </p>

              <h3>₹{product.price}</h3>

              <button onClick={() => addToCart(product)}>
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  )
}

export default Products
