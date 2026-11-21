
import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleLogin = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact">
      <h1>Login</h1>

      {submitted ? (
        <p>Login form submitted successfully!</p>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      )}
    </section>
  )
}

export default Login
