
import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <p>We would love to hear from you!</p>

      {submitted ? (
        <div>
          <h3>Thank you!</h3>
          <p>Your message has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      )}
    </section>
  )
}

export default Contact
