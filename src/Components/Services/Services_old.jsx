import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <div className="services-divider"></div>
        <p>
          We offer a wide range of engineering services to meet your needs, delivered by experienced professionals.
        </p>
      </div>
      <div className="services-list">
        <div className="service-card">
          <div className="service-card-content">

            <div className="service-card-title">Electrical Engineering</div>
          </div>
          <div className="service-card-desc">
            Generating Plant Installations including cogeneration, Electrical Sub-Stations, Power Transmission and Distribution, Electrical Lighting & Power Installations, Street Lighting, Lifts, Hoists and Escalators, Public Address Voice Alarm Systems, Television Installations, Building Management Systems
            <br /><br />
            <b>Some of the services include:</b>
            <br />
            Yard Lighting, Communication and Alarm Systems, Access Control and Security Systems, ICT Solutions and Networking Systems, Cogeneration
          </div>
          <button className="service-card-btn">Learn More</button>
        </div>
        <div className="service-card">
          <div className="service-card-content">

            <div className="service-card-title">Mechanical Engineering</div>
          </div>
          <div className="service-card-desc">
            Industrial Projects, Heating Installations, Hot and Cold-Water Service. Medical Gases Service, Air Compressors/Compressed Air Services, Medical Vacuum Systems, Air Conditioning and Mechanical Ventilation, Acoustics, Boiler Plants and Auxiliaries (HACCP Standards)
            <br /><br />
            <b>Some of the services include:</b>
            <br />
            Feasibility Studies and Reports, Refregation Installations and Cold Stores, Cooling Water Systems, Mechanical Vibratins and Isolations
          </div>
          <button className="service-card-btn">Learn More</button>
        </div>
        <div className="service-card">
          <div className="service-card-content">

            <div className="service-card-title">ICT Engineering</div>
          </div>
          <div className="service-card-desc">
            ICT Solutions and Networking Systems, Structured Cabling, Data Centres, Fibre Optic Installations, Wireless Networks, CCTV and Security Systems, Access Control Systems, Public Address Systems, Audio Visual Systems, Smart Building Solutions
            <br /><br />
            <b>Some of the services include:</b>
            <br />
            ICT Solutions and Networking Systems, Structured Cabling, Data Centres, Fibre Optic Installations, Wireless Networks, CCTV and Security Systems, Access Control Systems
          </div>
          <button className="service-card-btn">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Services
