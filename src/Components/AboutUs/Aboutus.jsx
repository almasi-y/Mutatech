import React from 'react';
import '../styles/Aboutus.css';

const Aboutus = () => {
  return (
    <div className='aboutus'>
      <div className="aboutus-header">
        <h1>About Us</h1>
        <div className="aboutus-divider"></div>
        <p className="aboutus-intro">
          Mutach-Tech Ltd has been in existence for the last 7 years and was registered as a Limited Company in Kenya in 2020. We are a team of engineers offering solutions to the Building and Construction Industry.
        </p>
        <p className="aboutus-description">
          We have been involved in Projects such as Residential/Apartments Construction up to 17 floors and about 72 Units (3bdrm Units), Mix Commercial Use Development Projects up to 32 Floors, Hotels up to 5-star, Industrial Blocks and Port Facilities. We have handled Projects in Power supply and distribution up to 33KV. With a thorough knowledge base and experience in Electrical Design, Installation, Supervision and commissioning we are set to offer our customers the best.
        </p>
      </div>

      <div className="aboutus-cards">
        <div className="aboutus-card">
          <div className="card-icon">
            <i className="fas fa-bullseye"></i>
          </div>
          <h3>Our Mission</h3>
          <p>To continuously give a competitive edge for Technological Advancement in Quality Power Management Systems by bridging the gap between the Manufacturers and the Power Market Players in the Retail, Construction and Research Industries.</p>
        </div>
        <div className="aboutus-card">
          <div className="card-icon">
            <i className="fas fa-eye"></i>
          </div>
          <h3>Our Vision</h3>
          <p>To be Africa's Leading Technological Company offering the most robust, cost-effective, high-quality, clean and reliable Electrical systems for Power Supply, Power Reticulation, Power Management and Installation by giving Value for Money to our clients.</p>
        </div>
        <div className="aboutus-card">
          <div className="card-icon">
            <i className="fas fa-heart"></i>
          </div>
          <h3>Our Core Values</h3>
          <p>Ethical engineering practices to come up with cost effective electrical engineering designs, reliable and timely practical electrical solutions that ensures our clients are given the best product that adheres to all applicable Electrical engineering standards and the relevant by laws.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Aboutus
