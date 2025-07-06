import React from 'react'
import './Hero.css'
import Carousel from './app'
import hero from '../../assets/hero.jpg'
import hero2 from '../../assets/hero2.jpg'
import hero3 from '../../assets/hero3.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <Carousel>
      <div className="item" style={{ 
        backgroundImage: `url(${hero})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}>
        <div className="content">
          <div className="title">MUTATECH</div>
          <div className="name">INNOVATIVE SOLUTIONS</div>
          <div className="des">Discover cutting-edge solutions designed to drive your business forward with innovation and efficiency.</div>
          <Link to="/services">
            <button className='btn'>Explore Services</button>
          </Link>
        </div>
      </div>
      <div className="item" style={{ 
        backgroundImage: `url(${hero2})`,
        backgroundPosition: 'center 30%',
        backgroundSize: 'cover',
      }}>
        <div className="content">
          <div className="title">MUTATECH</div>
          <div className="name">ADVANCED POWER DISTRIBUTION</div>
          <div className="des">Experience reliable and intelligent power distribution systems for modern infrastructure needs.</div>
          <Link to="/projects">
            <button className='btn'>View Projects</button>
          </Link>
        </div>
      </div>
      <div className="item" style={{ 
        backgroundImage: `url(${hero3})`,
        backgroundPosition: 'center 40%',
        backgroundSize: 'cover',
      }}>
        <div className="content">
          <div className="title">MUTATECH</div>
          <div className="name">SUSTAINABLE ENERGY</div>
          <div className="des">Empowering a greener future with sustainable technologies and eco-friendly solutions.</div>
          <Link to="/about">
            <button className='btn'>About Us</button>
          </Link>
        </div>
      </div>
      <div className="item" style={{ 
        backgroundImage: `url(${hero})`,
        backgroundPosition: 'center 25%',
        backgroundSize: 'cover',
        filter: 'brightness(1.1) contrast(1.1)',
      }}>
        <div className="content">
          <div className="title">MUTATECH</div>
          <div className="name">ICT SOLUTIONS</div>
          <div className="des">Transform your digital landscape with our comprehensive ICT services and support.</div>
          <Link to="/services">
            <button className='btn'>Learn More</button>
          </Link>
        </div>
      </div>
      <div className="item" style={{ 
        backgroundImage: `url(${hero2})`,
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
        filter: 'brightness(1.05) saturate(1.1)',
      }}>
        <div className="content">
          <div className="title">MUTATECH</div>
          <div className="name">INDUSTRIAL EXPERTISE</div>
          <div className="des">Innovative solutions tailored to meet the unique challenges of your industry.</div>
          <Link to="/contact">
            <button className='btn'>Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="item" style={{ 
        backgroundImage: `url(${hero3})`,
        backgroundPosition: 'center 20%',
        backgroundSize: 'cover',
        filter: 'brightness(1.05) contrast(1.05)',
      }}>
        <div className="content">
          <div className="title">MUTATECH</div>
          <div className="name">SMART POWER SYSTEMS</div>
          <div className="des">Delivering advanced power distribution for efficient and scalable energy management.</div>
          <Link to="/projects">
            <button className='btn'>Our Projects</button>
          </Link>
        </div>
      </div>
    </Carousel>
  )
}

export default Hero
