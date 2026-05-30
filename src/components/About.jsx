export default function About() {
  const tech = [
    'Java', 'Spring Boot', 'REST APIs', 'Microservices',
    'Apache Kafka', 'MongoDB', 'Docker', 'AWS S3', 'Git', 'Python',
  ]

  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Java Backend Developer with 2+ years of experience building, debugging,
            and improving scalable backend systems for enterprise CRM platforms.
            Strong hands-on experience in Java, Spring Boot, REST APIs, Microservices,
            Apache Kafka, MongoDB, Docker, and AWS S3.
          </p>
          <p>
            Skilled in solving production issues, implementing backend fixes,
            integrating third-party APIs, and improving service reliability in
            agile development environments. Worked closely with engineering and
            product teams to deliver stable backend solutions used by enterprise
            clients.
          </p>
          <p>Technologies I&apos;ve been working with:</p>
          <ul className="tech-list">
            {tech.map(t => <li key={t}>{t}</li>)}
          </ul>
        </div>
        <div className="about-image">
          <div className="about-img-wrapper">
            <div className="about-img-placeholder">
              <img src={`${import.meta.env.BASE_URL}yeshwanth_prof.jpg`} alt="Yeshwanth Sai Barla" className="about-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
