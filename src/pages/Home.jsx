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
      <div className="container">
        <Aboutus />
        <Services />
        <Projects />
      </div>
    </div>
  )
}

export default Home
