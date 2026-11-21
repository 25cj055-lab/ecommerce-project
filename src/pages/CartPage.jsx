
import Cart from '../components/Cart'

function CartPage({
  cart,
  removeFromCart,
  updateQuantity,
  total,
  checkout,
  orderPlaced
}) {
  return (
    <Cart
      cart={cart}
      removeFromCart={removeFromCart}
      updateQuantity={updateQuantity}
      total={total}
      checkout={checkout}
      orderPlaced={orderPlaced}
    />
  )
}

export default CartPage
