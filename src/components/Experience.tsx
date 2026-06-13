import React from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'Intern Software Engineer',
      company: 'SOFTO Solution',
      period: 'March 2026 - Present',
      description: [
        'Developing and maintaining user-centric web applications using React and TypeScript.',
        'Collaborating on backend solutions and RESTful API development using PHP and Laravel framework.',
        'Working with relational databases (MySQL and PostgreSQL) to optimize queries and maintain structural integrity.',
        'Participating in team sprints, agile planning, and code review processes to deliver high-quality software.'
      ],
      tags: ['React', 'TypeScript', 'PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'Agile']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="section-tag">Experience</div>
      <h2 className="section-title">Work <span>History</span></h2>
      <p className="section-subtitle">
        My professional journey, starting with my current internship where I apply my skills in real-world environments.
      </p>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot">
              <span className="timeline-dot-pulse"></span>
            </div>
            
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">{exp.company}</div>
                </div>
                <div className="timeline-date">{exp.period}</div>
              </div>
              
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {exp.description.map((bullet, bulletIdx) => (
                  <li 
                    key={bulletIdx} 
                    className="timeline-desc"
                    style={{ 
                      position: 'relative', 
                      paddingLeft: '20px', 
                      marginBottom: '8px' 
                    }}
                  >
                    <span style={{ 
                      position: 'absolute', 
                      left: 0, 
                      color: 'var(--color-secondary)',
                      fontWeight: 'bold' 
                    }}>•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              
              <div className="timeline-tags">
                {exp.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="timeline-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
