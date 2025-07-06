import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../styles/ProjectDetails.css'
import project_1 from '../../assets/project.jpg'
import project_2 from '../../assets/project2.jpg'
import project_3 from '../../assets/project3.jpg'
import project_4 from '../../assets/project4.jpg'
import project_5 from '../../assets/project5.jpg'
import project_6 from '../../assets/project6.jpg'

const ProjectDetails = () => {
  const { id } = useParams()

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [id])
  
  const projectsData = {
    1: {
      title: "Residential Complex Power Distribution",
      category: "Residential",
      image: project_1,
      overview: "Complete electrical installation for a 17-floor residential complex with 72 units, including comprehensive power distribution and advanced lighting systems.",
      details: [
        "17-floor residential complex with 72 units (3-bedroom apartments)",
        "Complete power distribution system design and installation",
        "Advanced lighting control systems",
        "Emergency backup power solutions",
        "Energy-efficient electrical solutions",
        "Compliance with all safety standards and regulations"
      ],
      specifications: {
        "Project Duration": "18 months",
        "Voltage Level": "11KV/415V",
        "Total Units": "72 apartments",
        "Building Height": "17 floors",
        "Power Rating": "2.5 MVA"
      },
      challenges: "The main challenge was designing a robust power distribution system that could handle the high demand while ensuring reliability and safety across all 72 units. We implemented redundant systems and advanced monitoring to ensure uninterrupted power supply.",
      solution: "We designed and installed a state-of-the-art electrical distribution system with smart monitoring capabilities, ensuring efficient power management and immediate fault detection across the entire complex."
    },
    2: {
      title: "Commercial Building Electrical Design",
      category: "Commercial",
      image: project_2,
      overview: "Advanced electrical design and installation for a 32-floor mixed-use commercial development project featuring cutting-edge power management systems.",
      details: [
        "32-floor mixed-use commercial development",
        "Advanced power management and distribution",
        "Smart building automation systems",
        "High-efficiency lighting solutions",
        "Renewable energy integration",
        "Advanced fire safety and alarm systems"
      ],
      specifications: {
        "Project Duration": "24 months",
        "Voltage Level": "33KV/11KV/415V",
        "Building Height": "32 floors",
        "Total Area": "150,000 sq ft",
        "Power Rating": "8 MVA"
      },
      challenges: "Managing the complex electrical requirements of a mixed-use development while integrating smart building technologies and ensuring energy efficiency across all floors.",
      solution: "We implemented a comprehensive electrical design that incorporated smart building management systems, energy-efficient solutions, and advanced monitoring capabilities to optimize performance and reduce operational costs."
    },
    3: {
      title: "5-Star Hotel Power Management",
      category: "Hospitality",
      image: project_3,
      overview: "Comprehensive power management and distribution system for a luxury 5-star hotel facility with advanced guest room automation.",
      details: [
        "Luxury 5-star hotel facility",
        "Guest room automation systems",
        "Energy management solutions",
        "Uninterruptible power supply systems",
        "Advanced lighting control",
        "Kitchen and restaurant electrical systems"
      ],
      specifications: {
        "Project Duration": "15 months",
        "Voltage Level": "11KV/415V",
        "Guest Rooms": "200 rooms",
        "Hotel Rating": "5-star luxury",
        "Power Rating": "3.5 MVA"
      },
      challenges: "Ensuring uninterrupted power supply for critical hotel operations while implementing energy-efficient solutions that maintain guest comfort and operational efficiency.",
      solution: "We designed a redundant power system with intelligent load management, ensuring seamless operation of all hotel facilities while optimizing energy consumption through smart automation."
    },
    4: {
      title: "Industrial Facility Electrical Systems",
      category: "Industrial",
      image: project_4,
      overview: "Complete electrical systems design and installation for large-scale industrial blocks and manufacturing facilities with heavy-duty power requirements.",
      details: [
        "Large-scale industrial manufacturing facility",
        "Heavy-duty power distribution systems",
        "Motor control centers and variable frequency drives",
        "Industrial lighting and power outlets",
        "Emergency shutdown systems",
        "Compliance with industrial safety standards"
      ],
      specifications: {
        "Project Duration": "20 months",
        "Voltage Level": "33KV/11KV/415V",
        "Facility Type": "Manufacturing Plant",
        "Total Area": "200,000 sq ft",
        "Power Rating": "12 MVA"
      },
      challenges: "Designing electrical systems that could handle extremely high power loads while ensuring worker safety and maintaining operational efficiency in a demanding industrial environment.",
      solution: "We implemented a robust electrical infrastructure with redundant safety systems, advanced monitoring, and efficient power distribution designed specifically for heavy industrial applications."
    },
    5: {
      title: "Port Facility Power Infrastructure",
      category: "Infrastructure",
      image: project_5,
      overview: "High-voltage power distribution and infrastructure for port facilities handling up to 33KV systems with specialized marine electrical requirements.",
      details: [
        "Port facility power infrastructure",
        "33KV high-voltage distribution systems",
        "Marine electrical systems and shore power",
        "Crane and heavy machinery power supply",
        "Specialized corrosion-resistant installations",
        "24/7 operational reliability systems"
      ],
      specifications: {
        "Project Duration": "30 months",
        "Voltage Level": "33KV/11KV/415V",
        "Facility Type": "Commercial Port",
        "Coverage Area": "500,000 sq ft",
        "Power Rating": "25 MVA"
      },
      challenges: "Working in a harsh marine environment while providing reliable power infrastructure for critical port operations including heavy cranes and container handling equipment.",
      solution: "We designed and installed marine-grade electrical systems with specialized corrosion protection and redundant power supplies to ensure uninterrupted port operations."
    },
    6: {
      title: "Smart Building Management System",
      category: "Smart Systems",
      image: project_6,
      overview: "Implementation of advanced building management systems with integrated power monitoring, control, and automation for modern smart buildings.",
      details: [
        "Smart building automation and control",
        "Integrated power monitoring and management",
        "IoT-enabled electrical systems",
        "Energy optimization algorithms",
        "Remote monitoring and control capabilities",
        "Predictive maintenance systems"
      ],
      specifications: {
        "Project Duration": "12 months",
        "Voltage Level": "11KV/415V",
        "Building Type": "Smart Office Complex",
        "Total Area": "80,000 sq ft",
        "Power Rating": "4 MVA"
      },
      challenges: "Integrating traditional electrical systems with cutting-edge IoT technology while ensuring seamless operation and energy efficiency optimization.",
      solution: "We implemented a comprehensive smart building solution with AI-powered energy management, real-time monitoring, and predictive maintenance capabilities for optimal performance."
    }
  }

  const project = projectsData[id]

  if (!project) {
    return (
      <div className="project-details-container">
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist or has been moved.</p>
          <Link to="/projects" className="back-to-projects">
            ← Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="project-details-container">
      <div className="project-details-hero">
        <div className="project-hero-content">
          <div className="breadcrumb">
            <Link to="/projects">Projects</Link> / <span>{project.title}</span>
          </div>
          <h1>{project.title}</h1>
          <span className="project-category-badge">{project.category}</span>
        </div>
        <div className="project-hero-image">
          <img src={project.image} alt={project.title} />
        </div>
      </div>

      <div className="project-details-content">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>{project.overview}</p>
        </div>

        <div className="project-specs-grid">
          <div className="project-details-section">
            <h3>Project Details</h3>
            <ul>
              {project.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="project-specifications">
            <h3>Technical Specifications</h3>
            <div className="specs-list">
              {Object.entries(project.specifications).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <span className="spec-label">{key}:</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="project-challenges-solution">
          <div className="challenge-section">
            <h3>Challenge</h3>
            <p>{project.challenges}</p>
          </div>
          <div className="solution-section">
            <h3>Our Solution</h3>
            <p>{project.solution}</p>
          </div>
        </div>

        <div className="project-navigation">
          <Link to="/projects" className="back-to-projects">
            ← Back to Projects
          </Link>
          <Link to="/contact" className="contact-us-btn">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
