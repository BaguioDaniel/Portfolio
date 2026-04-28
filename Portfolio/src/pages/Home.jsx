import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import { experiences, personalInfo, projects, techStack, certifications } from '../data/experiences'
import CanvasBackground from '../components/CanvasBackground'

export default function Home() {
  const [filter, setFilter] = useState('all')
  const [filteredExperiences, setFilteredExperiences] = useState(experiences)

  useEffect(() => {
    if (filter === 'all') {
      setFilteredExperiences(experiences)
    } else {
      setFilteredExperiences(experiences.filter(exp => exp.type === filter))
    }
  }, [filter])

  return (
    <>
      <CanvasBackground />
      <div className="content">
        <div className="container">
          {/* PERSONAL INFORMATION SECTION */}
          <section className="personal-info">
            <h1>{personalInfo.name}</h1>
            <p className="title">{personalInfo.title}</p>
            <p className="bio">{personalInfo.bio}</p>
            <div className="contact-links">
              <a href={`mailto:${personalInfo.email}?subject=Let's Connect`} rel="noopener noreferrer">Email</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={personalInfo.resume} target="_blank" download="Daniel Jeremiah Baguio.pdf" className="resume-btn">Resume</a>
            </div>
          </section>

          {/* MAIN EXPERIENCES SECTION */}
          <section className="experiences">
            <h2>Work Experience Overview</h2>

            <Link to="/timeline" className="timeline-button">
              My Professional Journey →
            </Link>

            <div className="filter-buttons">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`filter-btn ${filter === 'full-time' ? 'active' : ''}`}
                onClick={() => setFilter('full-time')}
              >
                Full-Time
              </button>
              <button 
                className={`filter-btn ${filter === 'freelancer' ? 'active' : ''}`}
                onClick={() => setFilter('freelancer')}
              >
                Freelancer
              </button>
              <button 
                className={`filter-btn ${filter === 'internship' ? 'active' : ''}`}
                onClick={() => setFilter('internship')}
              >
                Internship
              </button>
            </div>

            <div className="experience-items">
              {filteredExperiences.map(exp => (
                <Link 
                  key={exp.id}
                  to={`/experience/${exp.slug}`} 
                  className="experience-item-link"
                >
                  <div className="experience-item">
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                    <p>{exp.overview}</p>
                    <span className="view-more">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* TECH STACKS SECTION */}
          <section className="tech-stacks">
            <h2>Tech Stacks and Certifications</h2>
            <div className="skills-category">
              <h4>Frontend</h4>
              <div className="skill-tags">
                {techStack.frontend.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skills-category">
              <h4>Backend</h4>
              <div className="skill-tags">
                {techStack.backend.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skills-category">
              <h4>Tools & Others</h4>
              <div className="skill-tags">
                {techStack.tools.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skills-category">
              <h4>Proof of Certification</h4>
              <div className="skill-tags">
                {certifications.name.map((cert, idx) => (
                  <a key={idx} href={certifications.link[idx]} className="skill-tag" target="_blank" rel="noopener noreferrer"> {cert} </a>
                ))}
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section className="projects">
            <h2>Personal Projects</h2>
            {projects.map((project, idx) => (
              <div key={idx} className="project-item">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            ))}
          </section>

          {/* FOOTER */}
          <footer className="footer">
            <p>&copy; 2026 Daniel Jeremiah Baguio. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  )
}
