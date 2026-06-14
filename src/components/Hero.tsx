import React from 'react';
import { ArrowRight } from 'lucide-react';
import hasithaPhoto from '../assets/hasitha.jpg';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section section">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-tag">
            <span className="hero-tag-pulse"></span>
            Open for Opportunities
          </div>
          <h1 className="hero-title">
            Hi, I'm <br />
            <span>Hasitha Lakruwan</span>
          </h1>
          <h2 className="hero-subtitle">Software Engineer</h2>
          <p className="hero-desc">
            Undergraduate software engineering student passionate about designing and building efficient, modern, and reliable web applications. Currently bridging design aesthetics with robust backends.
          </p>
          <div className="hero-buttons">
            <button 
              onClick={() => handleScrollTo('contact')} 
              className="btn btn-primary"
            >
              Get in Touch <ArrowRight size={18} />
            </button>
            {/* <button 
              onClick={() => handleScrollTo('technologies')} 
              className="btn btn-secondary"
            >
              View Technologies
            </button> */}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar-card-simple">
            <img src={hasithaPhoto} alt="Hasitha Lakruwan" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};
