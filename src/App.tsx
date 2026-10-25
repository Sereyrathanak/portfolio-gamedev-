import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Box, Github, Linkedin, Mail, Menu, Move3d, Smartphone, X } from 'lucide-react';
import { useState } from 'react';
import { Portrait } from './components/Portrait';
import { ProjectProjection } from './components/ProjectProjection';
import { portfolioData } from './data';

function App() {
  const { profile, projects, plannedProjects, skills } = portfolioData;
  const featuredProject = projects.find((project) => project.featured && project.type === 'unity-game')!;
  const softwareProjects = projects.filter((project) => project.type === 'software-project');
  const [selectedSoftware, setSelectedSoftware] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const activeSoftware = softwareProjects[selectedSoftware];

  const handleProjectKey = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % softwareProjects.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + softwareProjects.length) % softwareProjects.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = softwareProjects.length - 1;
    else return;
    event.preventDefault();
    setSelectedSoftware(nextIndex);
    document.getElementById(`software-tab-${nextIndex}`)?.focus();
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <header className="site-header">
        <a className="identity-brand" href="#top" aria-label="Rith Sereyrathanak portfolio home">
          <span className="brand-signal" aria-hidden="true" />
          <strong>Shufenzzz</strong>
          <span>Portfolio</span>
        </a>
        <span className="header-axis" aria-hidden="true"><i>X</i><i>Y</i><i>Z</i></span>
        <nav className={menuOpen ? 'site-nav site-nav--open' : 'site-nav'} aria-label="Primary navigation">
          <a href="#build" onClick={closeMenu}>Unity build</a>
          <a href="#projects" onClick={closeMenu}>Software</a>
          <a href="#toolkit" onClick={closeMenu}>Toolkit</a>
          <a href="#roadmap" onClick={closeMenu}>Coming soon</a>
          <a href="#about" onClick={closeMenu}>About</a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="portrait-hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-portrait">
          <Portrait src={profile.portrait} name={profile.name} />
          <span className="hero-portrait__label">Portrait / Rith Sereyrathanak</span>
          <span className="crop crop--tl" /><span className="crop crop--tr" /><span className="crop crop--bl" /><span className="crop crop--br" />
        </div>
        <div className="hero-copy">
          <h1 id="hero-title">Unity Game Developer <span>· Software Engineering Student</span></h1>
          <p className="hero-intro">{profile.introduction}</p>
          <div className="hero-current">
            <div className="hero-current__title">
              <strong>{featuredProject.title}</strong>
              <span>{featuredProject.statusLabel}</span>
            </div>
            <p>{featuredProject.summary}</p>
          </div>
          <div className="hero-actions">
            <a className="button button--primary" href="#build">View FirstGame <ArrowDown size={19} /></a>
            <a className="button button--secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={18} /></a>
          </div>
          <div className="hero-meta" aria-label="Profile highlights">
            <span>Unity 6</span><span>C#</span><span>Open to game-dev internships</span>
          </div>
        </div>
      </section>

      <section className="current-build" id="build" aria-labelledby="build-title">
        <div className="section-shell">
          <div className="build-heading">
            <h2 id="build-title">The current Unity build.</h2>
            <div className="build-state"><span className="live-dot" aria-hidden="true" /> {featuredProject.statusLabel}</div>
          </div>
          <div className="build-layout">
            <div className="build-media">
              <ProjectProjection project={featuredProject} variant="hero" />
            </div>
            <article className="build-record">
              <div className="build-record__top"><span>Scene / 01</span><span>Build / Prototype</span></div>
              <h3>{featuredProject.title}</h3>
              <p className="build-subtitle">{featuredProject.subtitle}</p>
              <p>{featuredProject.summary}</p>
              <ul className="fact-list">{featuredProject.verifiedFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
              <div className="controls-strip" aria-label="Keyboard controls">
                <span><kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> Move</span>
                <span><kbd>Space</kbd> Jump</span>
              </div>
              <div className="technology-list">{featuredProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <a className="record-action" href={featuredProject.repositoryUrl} target="_blank" rel="noreferrer">Explore FirstGame on GitHub <ArrowUpRight size={18} /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="software-projects" id="projects" aria-labelledby="projects-title">
        <div className="section-shell">
          <div className="section-heading">
            <h2 id="projects-title">Selected software projects.</h2>
            <p>Supporting team products, presented from repository evidence. These records describe the product and stack—not unverified individual contribution.</p>
          </div>
          <div className="software-selector" role="tablist" aria-label="Choose a supporting software project">
            {softwareProjects.map((project, index) => (
              <button id={`software-tab-${index}`} key={project.id} type="button" role="tab" aria-selected={selectedSoftware === index} aria-controls="software-panel" tabIndex={selectedSoftware === index ? 0 : -1} onClick={() => setSelectedSoftware(index)} onKeyDown={(event) => handleProjectKey(event, index)} className={selectedSoftware === index ? 'software-tab software-tab--active' : 'software-tab'}>
                <span>{String(index + 1).padStart(2, '0')}</span><strong>{project.title}</strong><small>{project.subtitle}</small>
              </button>
            ))}
          </div>
          <div id="software-panel" role="tabpanel" aria-labelledby={`software-tab-${selectedSoftware}`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.article key={activeSoftware.id} className="software-record" initial={reduceMotion ? false : { clipPath: 'inset(0 100% 0 0)' }} animate={{ clipPath: 'inset(0 0 0 0)' }} exit={reduceMotion ? undefined : { clipPath: 'inset(0 0 0 100%)' }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                <ProjectProjection project={activeSoftware} variant="archive" />
                <div className="software-copy">
                  <h3>{activeSoftware.title}</h3>
                  <span className="status-label">{activeSoftware.statusLabel}</span>
                  <p>{activeSoftware.summary}</p>
                  <ul className="fact-list fact-list--light">{activeSoftware.verifiedFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
                  <div className="technology-list">{activeSoftware.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <a className="record-action record-action--light" href={activeSoftware.repositoryUrl} target="_blank" rel="noreferrer">Open team repository <ArrowUpRight size={18} /></a>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="toolkit section-shell" id="toolkit" aria-labelledby="toolkit-title">
        <div className="toolkit-copy">
          <h2 id="toolkit-title">Development toolkit.</h2>
          <p>Tools used across the current Unity build and supporting software work.</p>
          <span className="toolkit-axis" aria-hidden="true"><b>X</b> logic <b>Y</b> interaction <b>Z</b> systems</span>
        </div>
        <div className="toolkit-ledger">
          {skills.map((skill, index) => (
            <div className="skill-row" key={skill.name}>
              <span>{String(index + 1).padStart(2, '0')}</span><strong>{skill.name}</strong><p>{skill.detail}</p><small>{skill.category}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="roadmap" id="roadmap" aria-labelledby="roadmap-title">
        <div className="section-shell">
          <div className="section-heading section-heading--dark">
            <h2 id="roadmap-title">Coming soon.</h2>
            <p>Planned directions—not active builds. Details and repository links will appear only when real development begins.</p>
          </div>
          <div className="roadmap-track">
            {plannedProjects.map((project, index) => {
              const Icon = index === 0 ? Box : index === 1 ? Smartphone : Move3d;
              return (
                <article className={project.id === 'vr-capstone' ? 'roadmap-card roadmap-card--capstone' : 'roadmap-card'} key={project.id}>
                  <div className="roadmap-card__top"><span>{String(index + 1).padStart(2, '0')}</span><Icon size={24} aria-hidden="true" /></div>
                  <h3>{project.title}</h3>
                  <span className="status-label status-label--planned">{project.statusLabel}</span>
                  <p>{project.summary}</p>
                  <ul>{project.verifiedFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
                  <div className="no-repository">Repository / Not available</div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about section-shell" id="about" aria-labelledby="about-title">
        <div className="about-mark" aria-hidden="true"><span>R</span><i>X</i><i>Y</i><i>Z</i></div>
        <div className="about-copy">
          <h2 id="about-title">Building toward better play.</h2>
          <p>{profile.about}</p>
          <div className="about-credit"><strong>{profile.name}</strong><span>{profile.title}</span></div>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="section-shell contact-inner">
          <div>
            <h2 id="contact-title">See the work in progress.</h2>
            <p>For internships, collaboration, or project questions, reach out by email or LinkedIn. GitHub holds the latest project code.</p>
          </div>
          <div className="contact-actions" aria-label="Contact links">
            <a className="contact-action" href={`mailto:${profile.email}`}>
              <Mail size={24} aria-hidden="true" />
              <span><small>Email</small>{profile.email}</span>
              <ArrowRight size={28} aria-hidden="true" />
            </a>
            <a className="contact-action" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={24} aria-hidden="true" />
              <span><small>LinkedIn</small>linkedin.com/in/rith-sereyrathanak</span>
              <ArrowUpRight size={28} aria-hidden="true" />
            </a>
            <a className="contact-action" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={24} aria-hidden="true" />
              <span><small>GitHub</small>View project repositories</span>
              <ArrowUpRight size={28} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a className="footer-brand" href="#top"><span aria-hidden="true" /> Black Box Playback</a>
        <span>Rith Sereyrathanak · Unity game developer portfolio</span>
        <a href="#top">Back to top <ArrowUpRight size={15} /></a>
      </footer>
    </main>
  );
}

export default App;
