
function Cart({
  cart,
  removeFromCart,
  updateQuantity,
  total,
  checkout,
  orderPlaced
}) {
  return (
    <section id="cart">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span>
                {item.name} - ₹{item.price}
              </span>

              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => updateQuantity(item.id, 1)}>
                  +
                </button>
              </div>

              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>

          <button onClick={checkout}>
            Checkout
          </button>
        </>
      )}

      {orderPlaced && (
        <h3 className="success-message">
          Your order has been placed successfully!
        </h3>
      )}
    </section>
  )
}

export default Cart


