import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='container'>
      <img src={logo} alt="Mutach tech" className="logo" />
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>
      <ul className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(false)}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Projects</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
