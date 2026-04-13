import { Link } from 'react-router-dom'
import { details } from '../data/timelinedetails'
import '../styles/Timeline.css'

export default function Timeline() {

  return (
    <div className="content">
      <div className="container">
        <div className="timeline-header-section">
          <Link to="/" className="back-button">← Back</Link>
          <h2 className="timeline-title">Professional Timeline</h2>
        </div>
        
        <div className="timeline-items">
          {details.map((item) => (
            <div className="timeline-item">
            <div className="timeline-date">{item.timeline_date}</div>
            <div className="timeline-content">
                <h3>{item.title}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-type">{item.type}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
