function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">Rs. {product.price}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </article>
  )
}

export default ProductCard
