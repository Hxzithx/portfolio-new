import React from 'react';

export const Technologies: React.FC = () => {
  const techList = [
    'HTML & CSS',
    'JavaScript',
    'TypeScript',
    'PHP',
    'React',
    'Laravel',
    'MySQL',
    'PostgreSQL'
  ];

  return (
    <section id="technologies" className="section">
      <div className="section-tag">Technologies</div>
      <h2 className="section-title">Technologies I've been <span>working with</span></h2>
      <p className="section-subtitle">
        Here is a list of the core programming languages, frameworks, and database technologies that I have been using recently.
      </p>

      <div className="tech-list-grid">
        {techList.map((tech, index) => (
          <div key={index} className="tech-list-item">
            <span className="tech-list-marker"></span>
            <span className="tech-list-text">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
