import React from 'react'
import '../styles/Contactus.css'

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
        <div className="contact-info-section">
          <h3>Get In Touch</h3>
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4>Address</h4>
              <p>123 Mutach Street<br />Nairobi, Kenya</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h4>Phone</h4>
              <p>+254 123 456 789</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>info@mutachtech.co.ke</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h4>Working Hours</h4>
              <p>Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="contact-form">
            <h3>Send us a message</h3>
            <form>
              <div className="form-row">
                <div className="form-group half">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group half">
                  <input type="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="6" required></textarea>
              </div>
              <button type="submit" className="btn contact-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus
