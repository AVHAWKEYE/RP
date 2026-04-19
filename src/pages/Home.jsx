import products from '../data/products'
import ProductCard from '../components/ProductCard'

function Home({ onAddToCart }) {
  return (
    <section className="page">
      <div className="page-title-row">
        <h1>Product Catalogue</h1>
        <p>Simple products for your daily needs.</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}

export default Home
