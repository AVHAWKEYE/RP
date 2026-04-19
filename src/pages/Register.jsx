import { useState } from 'react'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim() || !password.trim()) {
      setIsError(true)
      setMessage('Email and password are required.')
      return
    }

    const users = JSON.parse(localStorage.getItem('ec_users')) || []
    const existingUser = users.find((user) => user.email === email.trim())

    if (existingUser) {
      setIsError(true)
      setMessage('User with this email already exists.')
      return
    }

    const newUser = {
      id: Date.now(),
      name: name.trim() || 'User',
      email: email.trim(),
      password,
    }

    localStorage.setItem('ec_users', JSON.stringify([...users, newUser]))

    setIsError(false)
    setMessage('Registration successful! You can now log in.')
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <section className="page auth-wrap">
      <h1>Registration</h1>
      <form className="form-card" onSubmit={handleSubmit}>
        <label htmlFor="register-name">Name</label>
        <input
          id="register-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />

        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Create a password"
        />

        <button type="submit">Create Account</button>
        {message && (
          <p className={isError ? 'message error-message' : 'message success-message'}>{message}</p>
        )}
      </form>
    </section>
  )
}

export default Register
