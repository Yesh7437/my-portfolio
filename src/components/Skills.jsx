const skillCategories = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'SQL'],
  },
  {
    category: 'Backend & Frameworks',
    skills: ['Spring Boot', 'REST APIs', 'Microservices', 'Apache Kafka'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['MongoDB', 'Docker', 'AWS S3', 'Git'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map(cat => (
          <div key={cat.category} className="skill-category">
            <h3 className="skill-category-title">{cat.category}</h3>
            <div className="skill-tags">
              {cat.skills.map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
