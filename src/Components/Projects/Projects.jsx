import React from 'react'
import './Projects.css'
import project_1 from '../../assets/project.jpg'
import project_2 from '../../assets/project2.jpg'
import project_3 from '../../assets/project3.jpg'

const Projects = () => {
  return (
    <div>
      <div className="projects-header">
        <h2>Our Projects</h2>
        <div className="projects-divider"></div>
        <p>
          Explore some of our recent work and see how we deliver innovative solutions for our clients.
        </p>
      </div>
      <div className="projects">
        <div className="project">
          <div className="project-inner">
            <img src={project_1} alt="Project 1" />
            <div className="project-details">
              <h3>Project Title 1</h3>
              <p>Description of the project goes here. It should be concise and informative.</p>
              <button className='btn'>View Details</button>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-inner">
            <img src={project_2} alt="Project 2" />
            <div className="project-details">
              <h3>Project Title 2</h3>
              <p>Description of the project goes here. It should be concise and informative.</p>
              <button className='btn'>View Details</button>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-inner">
            <img src={project_3} alt="Project 3" />
            <div className="project-details">
              <h3>Project Title 3</h3>
              <p>Description of the project goes here. It should be concise and informative.</p>
              <button className='btn'>View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
