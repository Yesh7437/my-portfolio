const projects = [
  {
    title: 'CRM Platform Backend',
    desc: 'Enterprise CRM backend handling user management, lead tracking, and real-time analytics. Built with microservices architecture for scalability.',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'Apache Kafka'],
    link: '#',
  },
  {
    title: 'Payment Gateway Integration',
    desc: 'Third-party payment integration service with idempotency, retry logic, and webhook handling for reliable transaction processing.',
    tags: ['Java', 'REST APIs', 'Docker', 'AWS S3'],
    link: '#',
  },
  {
    title: 'Real-Time Notification Service',
    desc: 'Low-latency notification system using event-driven architecture to deliver real-time alerts across multiple channels.',
    tags: ['Apache Kafka', 'Spring Boot', 'Microservices', 'Docker'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.title} className="project-card">
            <div className="project-header">
              <svg className="folder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
              </svg>
              <a href={p.link} className="project-link" aria-label={`Open ${p.title}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <ul className="project-tags">
              {p.tags.map(t => <li key={t}>{t}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
