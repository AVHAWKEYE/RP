import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const CART_KEY = 'ec_cart'
  const [cartItems, setCartItems] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_KEY)
    const savedUser = localStorage.getItem('ec_current_user')

    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }

    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const handleLogout = () => {
    localStorage.removeItem('ec_current_user')
    setCurrentUser(null)
  }

  return (
    <div className="app-shell">
      <Navbar cartCount={cartCount} currentUser={currentUser} onLogout={handleLogout} />

      <main className="content-wrap">
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/login" element={<Login onLoginSuccess={setCurrentUser} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} onRemoveItem={removeFromCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
