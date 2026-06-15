import React from 'react';
import { BookOpen, Briefcase, Code, GraduationCap } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <ScrollReveal animation="fade-up" delay={0}>
        <div className="section-tag">About Me</div>
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up" delay={100}>
        <h2 className="section-title">Bridging Theory <span>& Practice</span></h2>
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up" delay={200}>
        <p className="section-subtitle">
          A glimpse into who I am, where I study, and my current professional activities.
        </p>
      </ScrollReveal>

      <div className="about-grid">
        <ScrollReveal animation="zoom-in" delay={150} className="about-graphics">
          <div className="about-code-block">
            <span className="code-comment">// A brief representation of myself</span>
            <br />
            <span className="code-keyword">const</span> developer = &#123;
            <br />
            &nbsp;&nbsp;name: <span className="code-string">'Hasitha Lakruwan'</span>,
            <br />
            &nbsp;&nbsp;role: <span className="code-string">'Intern Software Engineer'</span>,
            <br />
            &nbsp;&nbsp;education: <span className="code-string">'NIBM Undergraduate'</span>,
            <br />
            &nbsp;&nbsp;interests: [<span className="code-string">'Full-stack'</span>, <span className="code-string">'Databases'</span>, <span className="code-string">'Clean Architecture'</span>],
            <br />
            &nbsp;&nbsp;isCoffeePowered: <span className="code-property">true</span>,
            <br />
            &nbsp;&nbsp;skillsGrowth: <span className="code-keyword">async</span> () =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">await</span> learnDaily();
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;buildCoolProjects();
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;;
          </div>
        </ScrollReveal>

        <div className="about-text">
          <ScrollReveal animation="fade-up" delay={150}>
            <p className="about-p">
              I am an undergraduate Software Engineering student at NIBM, currently doing my internship at SOFTO Solution as an Intern Software Engineer. 
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={250}>
            <p className="about-p" style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
              I am passionate about learning new technologies and applying engineering principles to build robust web systems. Working inside an agile team environment at SOFTO Solution has helped me bridge academic theory with standard enterprise development.
            </p>
          </ScrollReveal>

          <div className="about-details-grid">
            <ScrollReveal animation="fade-up" delay={100} className="about-detail-card">
              <GraduationCap className="about-detail-icon" size={24} />
              <h3 className="about-detail-title">Education</h3>
              <p className="about-detail-desc">Undergraduate Software Engineering Student at NIBM.</p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200} className="about-detail-card">
              <Briefcase className="about-detail-icon" size={24} />
              <h3 className="about-detail-title">Current Position</h3>
              <p className="about-detail-desc">Intern Software Engineer at SOFTO Solution.</p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300} className="about-detail-card">
              <Code className="about-detail-icon" size={24} />
              <h3 className="about-detail-title">Fullstack Focus</h3>
              <p className="about-detail-desc">Passionate about React frontends and Laravel backends.</p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400} className="about-detail-card">
              <BookOpen className="about-detail-icon" size={24} />
              <h3 className="about-detail-title">Lifelong Learner</h3>
              <p className="about-detail-desc">Constantly exploring advanced architectural concepts.</p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
