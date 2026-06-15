import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Contact: React.FC = () => {
  const emailAddress = 'hasithalakruwan081@gmail.com';

  return (
    <section id="contact" className="section contact-section-centered">
      <ScrollReveal animation="fade-up" delay={0}>
        <div className="section-tag">Contact</div>
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up" delay={100}>
        <h2 className="section-title">Let's <span>Connect</span></h2>
      </ScrollReveal>

      <div className="contact-center-content">
        <ScrollReveal animation="fade-up" delay={200}>
          <p className="contact-info-desc">
            Whether you want to discuss a potential project, ask questions about my experience at my internship, or just say hello, my inbox is always open. I'll do my best to get back to you as soon as possible!
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={350}>
          <div className="contact-text-details">
            <div className="contact-text-item">
              <span className="contact-text-label">Email:</span>
              <a href={`mailto:${emailAddress}`} className="contact-text-link">
                {emailAddress}
              </a>
            </div>

            <div className="contact-text-item">
              <span className="contact-text-label">Location:</span>
              <span className="contact-text-val">Sri Lanka</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
