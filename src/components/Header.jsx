
import { Link } from 'react-router-dom'

function Header({ cartCount }) {
  return (
    <header>
      <h2>ShopEase</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  )
}

export default Header

