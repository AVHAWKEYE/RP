import { NavLink } from 'react-router-dom'

function Navbar({ cartCount, currentUser, onLogout }) {
  return (
    <header className="navbar">
      <div className="brand">ShopNest</div>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Contact
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Cart ({cartCount})
        </NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Login
        </NavLink>
        <NavLink to="/register" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Register
        </NavLink>
      </nav>

      <div className="user-area">
        {currentUser ? (
          <>
            <span className="user-name">Hi, {currentUser.name}</span>
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <span className="user-name">Guest User</span>
        )}
      </div>
    </header>
  )
}

export default Navbar
