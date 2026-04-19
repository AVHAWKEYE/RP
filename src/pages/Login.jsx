import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim() || !password.trim()) {
      setIsError(true)
      setMessage('Email and password are required.')
      return
    }

    const users = JSON.parse(localStorage.getItem('ec_users')) || []
    const matchedUser = users.find(
      (user) => user.email === email.trim() && user.password === password,
    )

    if (!matchedUser) {
      setIsError(true)
      setMessage('Invalid email or password.')
      return
    }

    localStorage.setItem('ec_current_user', JSON.stringify(matchedUser))
    onLoginSuccess(matchedUser)
    setIsError(false)
    setMessage('Login successful! Redirecting...')
    navigate('/')
  }

  return (
    <section className="page auth-wrap">
      <h1>Login</h1>
      <form className="form-card" onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>
        {message && (
          <p className={isError ? 'message error-message' : 'message success-message'}>{message}</p>
        )}
      </form>
    </section>
  )
}

export default Login
