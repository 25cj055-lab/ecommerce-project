
function Categories({ selectedCategory, setSelectedCategory }) {
  const categories = [
    'All',
    'Electronics',
    'Fashion',
    'Accessories'
  ]

  return (
    <div className="categories">
      <h2>Shop by Category</h2>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category ? 'active' : ''
            }
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Categories
