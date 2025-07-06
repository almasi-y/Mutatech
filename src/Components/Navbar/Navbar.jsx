import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../../assets/logo2.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='container'>
      <Link to="/">
        <img src={logo} alt="Mutach tech" className="logo" />
      </Link>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>
      <ul className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(false)}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact"><button className='btn'>Contact Us</button></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
