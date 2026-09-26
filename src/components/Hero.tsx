import React, { useRef } from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';
import hasithaPhoto from '../assets/hasitha.jpg';
import { ScrollReveal } from './ScrollReveal';
import VariableProximity from './VariableProximity';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

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
              <a 
                href="/Hasitha_Lakruwan_CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FileText size={18} /> My CV <ArrowUpRight size={18} />
              </a>
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
