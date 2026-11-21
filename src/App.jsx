
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'

import './App.css'

function App() {
  const [products] = useState([
    {
  id: 1,
  name: 'Headphones',
  price: 999,
  category: 'Electronics',
  description: 'Enjoy clear sound with comfortable wireless headphones.',
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
},
    {
  id: 2,
  name: 'Smart Watch',
  price: 1499,
  category: 'Electronics',
  description: 'Track your fitness, monitor activity and stay connected.',
  image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
},
    {
  id: 3,
  name: 'Backpack',
  price: 799,
  category: 'Accessories',
  description: 'A spacious and stylish backpack for everyday use.',
  image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62'
},
    {
  id: 4,
  name: 'T-Shirt',
  price: 599,
  category: 'Fashion',
  description: 'Comfortable and trendy cotton T-shirt for daily wear.',
  image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
},
    {
  id: 5,
  name: 'Shoes',
  price: 1299,
  category: 'Fashion',
  description: 'Stylish and comfortable shoes for everyday activities.',
  image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
}
  ])

  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')
  const [orderPlaced, setOrderPlaced] = useState(false)

  const addToCart = (product) => {
  const existingProduct = cart.find(
    (item) => item.id === product.id
  )

  if (existingProduct) {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  } else {
    setCart([...cart, { ...product, quantity: 1 }])
  }
}

  const removeFromCart = (index) => {
    setCart(cart.filter((item, i) => i !== index))
  }
const updateQuantity = (id, change) => {
  setCart(
    cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + change }
          : item
      )
      .filter((item) => item.quantity > 0)
  )
}
  const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
)

  const checkout = () => {
    setOrderPlaced(true)
    setCart([])
  }

  return (
    <BrowserRouter>
      <Header cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              search={search}
              setSearch={setSearch}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              total={total}
              checkout={checkout}
              orderPlaced={orderPlaced}
            />
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App



