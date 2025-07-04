import React from 'react'
import './Header.css'

const Header = () => (
  <div className="top-header">
    <div className="top-header-left">
      <span className="company-name">Mutach Tech</span>
    </div>
    <div className="top-header-right">
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="header-icon">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="header-icon">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="tel:+1234567890" className="header-icon" aria-label="Phone">
        <i className="fas fa-phone"></i> <span className="header-contact-text">+1 234 567 890</span>
      </a>
      <a href="mailto:info@mutachtech.com" className="header-icon" aria-label="Email">
        <i className="fas fa-envelope"></i> <span className="header-contact-text">info@mutachtech.com</span>
      </a>
    </div>
  </div>
)

export default Header
