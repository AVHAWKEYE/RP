import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill all fields before submitting.')
      return
    }

    alert('Thank you! Your message has been submitted.')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className="page auth-wrap">
      <h1>Contact Us</h1>
      <form className="form-card" onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />

        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
        />

        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          rows="4"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Write your message"
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact
