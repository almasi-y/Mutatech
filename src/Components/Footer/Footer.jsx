import React from 'react'
import '../styles/Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-brand">
        <a href="/" className="footer-logo">Mutach Tech</a>
        <div className="footer-desc">
          Innovative solutions for power, ICT, and engineering. We deliver excellence and reliability for your business and projects.
        </div>
        <div className="footer-socials">
          <a href="https://twitter.com/" className="footer-social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com/" className="footer-social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://facebook.com/" className="footer-social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="mailto:info@mutachtech.com" className="footer-social-link" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-links-title">Quick Links</div>
        <a href="/" className="footer-link">Home</a>
        <a href="/about" className="footer-link">About</a>
        <a href="/services" className="footer-link">Services</a>
        <a href="/projects" className="footer-link">Projects</a>
        <a href="/contact" className="footer-link">Contact</a>
      </div>
      <div className="footer-links">
        <div className="footer-links-title">Contact</div>
        <a href="mailto:info@mutachtech.com" className="footer-link">info@mutachtech.com</a>
        <a href="tel:+1234567890" className="footer-link">+1 234 567 890</a>
        <span className="footer-link">Nairobi, Kenya</span>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} Mutach Tech. All rights reserved.
    </div>
  </footer>
)

export default Footer
