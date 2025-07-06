import React from 'react'
import './Contactus.css'

const Contactus = () => {
  return (
    <div className="contactus">
      <div className="contactus-header">
        <h1>Contact Us</h1>
        <div className="contactus-divider"></div>
        <p>
          Get in touch with our team for inquiries, support, or to discuss your project needs. We're here to help you find the right solutions.
        </p>
      </div>

      <div className="contactus-content">
        <div className="contact-info">
          <div className="contact-item">
            <h3>Address</h3>
            <p>123 Mutach Street, Nairobi, Kenya</p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p>+254 123 456 789</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>info@mutachtech.co.ke</p>
          </div>
          <div className="contact-item">
            <h3>Working Hours</h3>
            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send us a message</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactus
