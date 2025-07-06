import React from 'react'
import Hero from '../Components/Hero/Hero'
import Aboutus from '../Components/AboutUs/Aboutus'
import Services from '../Components/Services/Services'
import Projects from '../Components/Projects/Projects'

const Home = () => {
  return (
    <div>
      {/* Hero section is full-width and doesn't need padding adjustment */}
      <Hero />
      
      {/* Main content sections with improved spacing and layout */}
      <main className="home-content">
        <section className="about-section">
          <Aboutus />
        </section>
        
        <section className="services-section">
          <Services />
        </section>
        
        <section className="projects-section">
          <Projects />
        </section>
      </main>
    </div>
  )
}

export default Home
