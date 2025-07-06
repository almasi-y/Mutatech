import React from 'react'
import '../styles/Services.css' // Assuming you have a CSS file for styling

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Electrical Engineering",
      icon: "fas fa-bolt",
      description: "Comprehensive electrical engineering solutions for all types of projects, from residential to industrial applications.",
      features: [
        "Power Generation & Distribution",
        "Electrical Sub-Stations",
        "Lighting & Power Installations", 
        "Building Management Systems",
        "Emergency Power Systems",
        "Energy Efficiency Solutions"
      ],
      specializations: [
        "Generating Plant Installations including cogeneration",
        "Power Transmission and Distribution up to 33KV",
        "Street Lighting and Public Infrastructure",
        "Lifts, Hoists and Escalators",
        "Public Address and Voice Alarm Systems"
      ]
    },
    {
      id: 2,
      title: "Mechanical Engineering",
      icon: "fas fa-cogs",
      description: "Advanced mechanical engineering services covering HVAC, plumbing, and industrial mechanical systems.",
      features: [
        "HVAC Systems Design & Installation",
        "Plumbing & Water Services",
        "Industrial Mechanical Systems",
        "Medical Gas Systems",
        "Refrigeration & Cold Storage",
        "Boiler Plants & Auxiliaries"
      ],
      specializations: [
        "Heating Installations and Hot/Cold Water Services",
        "Medical Gases and Vacuum Systems",
        "Air Conditioning and Mechanical Ventilation",
        "Acoustics and Vibration Control",
        "Compressed Air Services and Systems"
      ]
    },
    {
      id: 3,
      title: "ICT Engineering",
      icon: "fas fa-network-wired",
      description: "Cutting-edge ICT solutions including networking, security systems, and smart building technologies.",
      features: [
        "Structured Cabling Systems",
        "Data Centers & Server Rooms",
        "Network Infrastructure",
        "Security & Surveillance",
        "Smart Building Integration",
        "Telecommunications Systems"
      ],
      specializations: [
        "Fiber Optic Installations and Networking",
        "CCTV and Access Control Systems",
        "Wireless Networks and Wi-Fi Solutions",
        "Public Address and Audio Visual Systems",
        "Smart Building Automation and IoT"
      ]
    }
  ]

  return (
    <div className="services-container">
      <div className="services-header">
        <h2>Our Services</h2>
        <div className="services-divider"></div>
        <p>
          We offer a comprehensive range of engineering services to meet your needs, delivered by experienced professionals with proven expertise.
        </p>
      </div>

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-header">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>

            <div className="service-content">
              <div className="service-features">
                <h4>Key Services</h4>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="service-specializations">
                <h4>Specializations</h4>
                <ul className="specializations-list">
                  {service.specializations.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="service-footer">
              <button className="service-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
