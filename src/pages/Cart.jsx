function Cart({ cartItems, onRemoveItem }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <section className="page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-state">Your cart is empty. Add products from the catalogue.</p>
      ) : (
        <div className="cart-wrap">
          {cartItems.map((item) => (
            <article key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: Rs. {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => onRemoveItem(item.id)}>Remove</button>
            </article>
          ))}

          <div className="total-card">
            <h2>Total: Rs. {totalPrice}</h2>
          </div>
        </div>
      )}
    </section>
  )
}

export default Cart
