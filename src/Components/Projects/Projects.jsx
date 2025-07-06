import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'
import project_1 from '../../assets/project.jpg'
import project_2 from '../../assets/project2.jpg'
import project_3 from '../../assets/project3.jpg'
import project_4 from '../../assets/project4.jpg'
import project_5 from '../../assets/project5.jpg'
import project_6 from '../../assets/project6.jpg'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Residential Complex Power Distribution",
      description: "Complete electrical installation for a 17-floor residential complex with 72 units, including power distribution and lighting systems.",
      image: project_1,
      category: "Residential",
      duration: "18 months",
      year: "2023"
    },
    {
      id: 2,
      title: "Commercial Building Electrical Design",
      description: "Advanced electrical design and installation for a 32-floor mixed-use commercial development project.",
      image: project_2,
      category: "Commercial",
      duration: "24 months",
      year: "2023"
    },
    {
      id: 3,
      title: "5-Star Hotel Power Management",
      description: "Comprehensive power management and distribution system for a luxury 5-star hotel facility.",
      image: project_3,
      category: "Hospitality",
      duration: "15 months",
      year: "2022"
    },
    {
      id: 4,
      title: "Industrial Facility Electrical Systems",
      description: "Complete electrical systems design and installation for large-scale industrial blocks and manufacturing facilities.",
      image: project_4,
      category: "Industrial",
      duration: "20 months",
      year: "2022"
    },
    {
      id: 5,
      title: "Port Facility Power Infrastructure",
      description: "High-voltage power distribution and infrastructure for port facilities handling up to 33KV systems.",
      image: project_5,
      category: "Infrastructure",
      duration: "30 months",
      year: "2021"
    },
    {
      id: 6,
      title: "Smart Building Management System",
      description: "Implementation of advanced building management systems with integrated power monitoring and control.",
      image: project_6,
      category: "Smart Systems",
      duration: "12 months",
      year: "2023"
    }
  ]

  const categories = ['All', ...new Set(projects.map(project => project.category))]
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  if (isLoading) {
    return (
      <div className="projects-container">
        <div className="projects-loading">
          <div className="loading-spinner"></div>
          <p>Loading amazing projects...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>Our Projects</h2>
        <div className="projects-divider"></div>
        <p>
          Explore some of our recent work and see how we deliver innovative solutions for our clients across various sectors.
        </p>
      </div>

      <div className="projects-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-meta">
                <span className="project-year">{project.year}</span>
                <span className="project-duration">{project.duration}</span>
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

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found in this category.</p>
        </div>
      )}
    </div>
  )
}

export default Projects
