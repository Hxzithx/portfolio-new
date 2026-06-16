import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import hasithaPhoto from '../assets/hasitha.jpg';
import { ScrollReveal } from './ScrollReveal';
import VariableProximity from './VariableProximity';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

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
        <div ref={containerRef} className="hero-content" style={{ position: 'relative' }}>
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="hero-tag">
              <span className="hero-tag-pulse"></span>
              Open for Opportunities
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={250}>
            <h1 className="hero-title" style={{ display: 'flex', flexDirection: 'column' }}>
              <span>Hi, I'm</span>
              <div style={{ marginTop: '10px' }}>
                <VariableProximity
                  label="Hasitha Lakruwan"
                  className="hero-name-proximity"
                  fromFontVariationSettings="'wght' 300, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={200}
                  falloff="linear"
                />
              </div>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400}>
            <h2 className="hero-subtitle">Software Engineer</h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={550}>
            <p className="hero-desc">
              Undergraduate software engineering student passionate about designing and building efficient, modern, and reliable web applications. Currently bridging design aesthetics with robust backends.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={700}>
            <div className="hero-buttons">
              <button 
                onClick={() => handleScrollTo('contact')} 
                className="btn btn-primary"
              >
                Get in Touch <ArrowRight size={18} />
              </button>
            </div>
          </ScrollReveal>
        </div>

        <div className="hero-visual">
          <ScrollReveal animation="zoom-in" delay={300}>
            <div className="hero-avatar-card-simple">
              <img src={hasithaPhoto} alt="Hasitha Lakruwan" className="hero-photo" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
