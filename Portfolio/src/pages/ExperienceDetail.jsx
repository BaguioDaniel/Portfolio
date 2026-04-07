import { useParams, Link } from 'react-router-dom'
import '../styles/ExperienceDetail.css'
import { experiences } from '../data/experiences'
import CanvasBackground from '../components/CanvasBackground'

export default function ExperienceDetail() {
  const { slug } = useParams()
  const experience = experiences.find(exp => exp.slug === slug)

  if (!experience) {
    return (
      <>
        <CanvasBackground />
        <div className="content">
          <div className="container">
            <section className="error-message">
              <h2>Experience Not Found</h2>
              <p>The work experience you're looking for doesn't exist.</p>
              <Link to="/" className="back-button">← Back to Portfolio</Link>
            </section>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <CanvasBackground />
      <div className="content">
        <div className="container">
          {/* BACK BUTTON */}
          <div className="timeline-button-container">
            <Link to="/" className="back-button">← Back to Portfolio</Link>
          </div>

          {/* DETAIL HEADER */}
          <div className="detail-header">
            <h1>{experience.title}</h1>
            <p className="detail-company">{experience.company}</p>
            <div className="detail-meta">
              <span className="detail-type">
                {experience.type === 'full-time' && 'Full-Time Position'}
                {experience.type === 'freelancer' && 'Freelance Position'}
                {experience.type === 'internship' && 'Internship Position'}
              </span>
              <span className="detail-date">
                {experience.location} | {experience.startDate} - {experience.endDate}
              </span>
            </div>
          </div>

          {/* OVERVIEW SECTION */}
          <section className="detail-section">
            <h2>Overview</h2>
            <p>{experience.description}</p>
          </section>

          {/* KEY ACHIEVEMENTS */}
          <section className="detail-section">
            <h2>Key Achievements</h2>
            <ul className="detail-list">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </section>

          {/* TECHNOLOGIES & TOOLS */}
          <section className="detail-section">
            <h2>Technologies & Tools</h2>
            <div className="tech-list">
              {experience.tech.split(', ').map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </section>

          {/* IMPACT & ROLE */}
          <section className="detail-section">
            <h2>Impact & Role</h2>
            <p><strong>Role:</strong> {experience.role}</p>
            <p><strong>Key Impact:</strong> {experience.impact}</p>
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
