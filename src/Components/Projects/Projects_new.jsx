import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'
import project_1 from '../../assets/project.jpg'
import project_2 from '../../assets/project2.jpg'
import project_3 from '../../assets/project3.jpg'
import project_4 from '../../assets/project4.jpg'
import project_5 from '../../assets/project5.jpg'
import project_6 from '../../assets/project6.jpg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Residential Complex Power Distribution",
      description: "Complete electrical installation for a 17-floor residential complex with 72 units, including power distribution and lighting systems.",
      image: project_1,
      category: "Residential"
    },
    {
      id: 2,
      title: "Commercial Building Electrical Design",
      description: "Advanced electrical design and installation for a 32-floor mixed-use commercial development project.",
      image: project_2,
      category: "Commercial"
    },
    {
      id: 3,
      title: "5-Star Hotel Power Management",
      description: "Comprehensive power management and distribution system for a luxury 5-star hotel facility.",
      image: project_3,
      category: "Hospitality"
    },
    {
      id: 4,
      title: "Industrial Facility Electrical Systems",
      description: "Complete electrical systems design and installation for large-scale industrial blocks and manufacturing facilities.",
      image: project_4,
      category: "Industrial"
    },
    {
      id: 5,
      title: "Port Facility Power Infrastructure",
      description: "High-voltage power distribution and infrastructure for port facilities handling up to 33KV systems.",
      image: project_5,
      category: "Infrastructure"
    },
    {
      id: 6,
      title: "Smart Building Management System",
      description: "Implementation of advanced building management systems with integrated power monitoring and control.",
      image: project_6,
      category: "Smart Systems"
    }
  ]

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>Our Projects</h2>
        <div className="projects-divider"></div>
        <p>
          Explore some of our recent work and see how we deliver innovative solutions for our clients across various sectors.
        </p>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <span className="project-category">{project.category}</span>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={`/project/${project.id}`} className="project-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
