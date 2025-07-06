import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header.jsx'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
