import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import SideRays from './components/SideRays';
import StaggeredMenu from './components/StaggeredMenu';
import { Code2 } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Section scroll tracker using IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'about', 'technologies', 'experience', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section is in the middle of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home section', link: '#home' },
    { label: 'About', ariaLabel: 'Go to about section', link: '#about' },
    { label: 'Technologies', ariaLabel: 'Go to technologies section', link: '#technologies' },
    { label: 'Experience', ariaLabel: 'Go to experience section', link: '#experience' },
    { label: 'Contact', ariaLabel: 'Go to contact section', link: '#contact' },
  ];

  const socialItems = [
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/hasitha-lakruwan-754315411/' },
    { label: 'GitHub', link: 'https://github.com/Hxzithx' },
    { label: 'Instagram', link: 'https://www.instagram.com/hxzithx/' }
  ];

  const logoElement = (
    <a
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById('home');
        if (element) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }}
      className="navbar-logo"
      style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
    >
      <Code2 size={24} color="#6366f1" />
      <span style={{ fontWeight: 800, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Hasitha.L
      </span>
    </a>
  );

  return (
    <div className="app-container">

      {/* Decorative Blur Orbs */}
      <div className="ambient-orb ambient-orb-1"></div>
      <div className="ambient-orb ambient-orb-2"></div>
      <div className="ambient-orb ambient-orb-3"></div>

      {/* Side Rays Backdrop Effect */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '700px', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <SideRays
          speed={1.2}
          rayColor1="#6366f1"
          rayColor2="#06b6d4"
          intensity={1.5}
          spread={2.0}
          origin="top-right"
          tilt={-5}
          saturation={1.3}
          blend={0.6}
          falloff={1.5}
          opacity={0.7}
        />
      </div>

      {/* Staggered Navigation Overlay */}
      <StaggeredMenu
        position="right"
        isFixed={true}
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        logoElement={logoElement}
        accentColor="#06b6d4"
        colors={['#080911', '#6366f1', '#a855f7']}
        activeSection={activeSection}
      />
      
      <main className="content-wrapper">
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;

