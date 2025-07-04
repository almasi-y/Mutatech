import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero'
import Aboutus from './Components/AboutUs/Aboutus.jsx'
import Projects from './Components/Projects/Projects'
import Services from './Components/Services/Services'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <Navbar/>
      <Hero />
      <div className="container">
        <Aboutus/>
        <Services />
        <Projects />
        
      </div>
      <Footer />
      
      
    </div>
  )
}

export default App
