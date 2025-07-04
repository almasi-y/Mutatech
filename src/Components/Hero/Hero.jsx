import React from 'react'
import './Hero.css'
import Carousel from './app'
import hero from '../../assets/hero.jpg'
import hero2 from '../../assets/hero2.jpg'
import hero3 from '../../assets/hero3.jpg'

const Hero = () => {
  return (
    <Carousel>
      <div className="item" style={{ backgroundImage: `url(${hero})` }}>
        <div className="content">
          <div className="title">MUTACH TECH</div>
          <div className="name">INNOVATIVE SOLUTIONS</div>
          <div className="des">Discover cutting-edge solutions designed to drive your business forward with innovation and efficiency.</div>
            <button className='btn'>Go To Details</button>

        </div>
      </div>
      <div className="item" style={{ backgroundImage: `url(${hero2})` }}>
        <div className="content">
          <div className="title">MUTACH TECH</div>
          <div className="name">ADVANCED POWER DISTRIBUTION SYSTEM</div>
          <div className="des">Experience reliable and intelligent power distribution systems for modern infrastructure needs.</div>
            <button className='btn'>Go To Details</button>
        </div>
      </div>
      <div className="item" style={{ backgroundImage: `url(${hero3})` }}>
        <div className="content">
          <div className="title">MUTACH TECH</div>
          <div className="name">SUSTAINABLE</div>
          <div className="des">Empowering a greener future with sustainable technologies and eco-friendly solutions.</div>
            <button className='btn'>Go To Details</button>
        </div>
      </div>
      <div className="item" style={{ backgroundImage: `url(${hero})` }}>
        <div className="content">
          <div className="title">MUTACH TECH</div>
          <div className="name">ICT</div>
          <div className="des">Transform your digital landscape with our comprehensive ICT services and support.</div>
            <button className='btn'>Go To Details</button>
        </div>
      </div>
      <div className="item" style={{ backgroundImage: `url(${hero2})` }}>
        <div className="content">
          <div className="title">MUTACH TECH</div>
          <div className="name">INNOVATIVE SOLUTIONS</div>
          <div className="des">Innovative solutions tailored to meet the unique challenges of your industry.</div>
            <button className='btn'>Go To Details</button>
        </div>
      </div>
      <div className="item" style={{ backgroundImage: `url(${hero3})` }}>
        <div className="content">
          <div className="title">MUTACH TECH</div>
          <div className="name">ADVANCED POWER DISTRIBUTION </div>
          <div className="des">Delivering advanced power distribution for efficient and scalable energy management.</div>
            <button className='btn'>Go To Details</button>
        </div>
      </div>
    </Carousel>
  )
}

export default Hero
