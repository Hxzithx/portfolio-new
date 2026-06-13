import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

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

  return (
    <div className="app-container">

      {/* Decorative Blur Orbs */}
      <div className="ambient-orb ambient-orb-1"></div>
      <div className="ambient-orb ambient-orb-2"></div>
      <div className="ambient-orb ambient-orb-3"></div>

      {/* Main Content Layout */}
      <Navbar activeSection={activeSection} />
      
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
