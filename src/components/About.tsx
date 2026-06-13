import React from 'react';
import { BookOpen, Briefcase, Code, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="section-tag">About Me</div>
      <h2 className="section-title">Bridging Theory <span>& Practice</span></h2>
      <p className="section-subtitle">
        A glimpse into who I am, where I study, and my current professional activities.
      </p>

      <div className="about-grid">
        <div className="about-graphics">
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
        </div>

        <div className="about-text">
          <p className="about-p">
            I am an undergraduate Software Engineering student at NIBM, currently doing my internship at SOFTO Solution as an Intern Software Engineer. 
          </p>
          <p className="about-p" style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
            I am passionate about learning new technologies and applying engineering principles to build robust web systems. Working inside an agile team environment at SOFTO Solution has helped me bridge academic theory with standard enterprise development.
          </p>

          <div className="about-details-grid">
            <div className="about-detail-card">
              <GraduationCap className="about-detail-icon" size={24} />
              <h3 className="about-detail-title">Education</h3>
              <p className="about-detail-desc">Undergraduate Software Engineering Student at NIBM.</p>
            </div>

            <div className="about-detail-card">
              <Briefcase className="about-detail-icon" size={24} />
              <h3 className="about-detail-title">Current Position</h3>
              <p className="about-detail-desc">Intern Software Engineer at SOFTO Solution.</p>
            </div>

            <div className="about-detail-card">
              <Code className="about-detail-icon" size={24} />
              <h3 className="about-detail-title">Fullstack Focus</h3>
              <p className="about-detail-desc">Passionate about React frontends and Laravel backends.</p>
            </div>

            <div className="about-detail-card">
              <BookOpen className="about-detail-icon" size={24} />
              <h3 className="about-detail-title">Lifelong Learner</h3>
              <p className="about-detail-desc">Constantly exploring advanced architectural concepts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
