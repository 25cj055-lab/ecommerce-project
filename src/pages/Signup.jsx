
import { useState } from 'react'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSignup = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact">
      <h1>Sign Up</h1>

      {submitted ? (
        <p>Account created successfully!</p>
      ) : (
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
      )}
    </section>
  )
}

export default Signup
