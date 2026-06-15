import React from 'react';
import { ScrollReveal } from './ScrollReveal';

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
      <ScrollReveal animation="fade-up" delay={0}>
        <div className="section-tag">Technologies</div>
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up" delay={100}>
        <h2 className="section-title">Technologies I've been <span>working with</span></h2>
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up" delay={200}>
        <p className="section-subtitle">
          Here is a list of the core programming languages, frameworks, and database technologies that I have been using recently.
        </p>
      </ScrollReveal>

      <div className="tech-list-grid">
        {techList.map((tech, index) => (
          <ScrollReveal 
            key={index} 
            animation="fade-up" 
            delay={index * 50} 
            className="tech-list-item"
          >
            <span className="tech-list-marker"></span>
            <span className="tech-list-text">{tech}</span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
