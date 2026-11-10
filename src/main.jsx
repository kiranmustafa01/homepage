import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, Sparkles, Shirt, Palette, Layers3, Menu } from 'lucide-react';
import './styles.css';

const features = [
  { icon: <Sparkles size={21} />, number: '01', title: 'Your personal stylist', text: 'Get thoughtful outfit ideas shaped around your occasion, preferences and personal style.' },
  { icon: <Palette size={21} />, number: '02', title: 'Colour, considered', text: 'Explore colour combinations, contrasts and pairings that bring an outfit together.' },
  { icon: <Layers3 size={21} />, number: '03', title: 'A wardrobe with a plan', text: 'Build a visual wardrobe and rediscover new combinations from pieces you already own.' },
];

const projects = [
  { tag: 'AI STYLING', title: 'The art of getting dressed', text: 'A more considered way to find the outfit for every kind of day.', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85', alt: 'Fashion editorial showing a person browsing a clothing rack' },
  { tag: 'COLOUR STORIES', title: 'A palette that feels like you', text: 'Discover pairings that make your existing wardrobe feel new.', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85', alt: 'Curated neutral-toned clothing arranged as a fashion flat lay' },
  { tag: 'VIRTUAL WARDROBE', title: 'More from what you own', text: 'Bring your pieces together and make getting ready feel easier.', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=85', alt: 'Organised clothing displayed on a boutique wardrobe rail' },
];

function App() {
  return <>
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="auraT home">aura<span>T</span><i>.</i></a>
      <nav aria-label="Main navigation">
        <a href="#story">The story</a><a href="#features">What it does</a><a href="#journal">Explore</a>
      </nav>
      <a className="nav-cta" href="#contact">Let's connect <ArrowUpRight size={15} /></a>
      <a className="mobile-menu" href="#contact" aria-label="Go to contact"><Menu /></a>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> THE FUTURE OF PERSONAL STYLE</p>
          <h1>Wear what<br />feels <em>like you.</em></h1>
          <p className="hero-description">Meet auraT, your thoughtful AI styling companion. Less second-guessing, more getting dressed with intention.</p>
          <div className="hero-actions"><a className="button button-dark" href="#features">Discover auraT <ArrowUpRight size={16} /></a><a className="text-link" href="#story">Our point of view <ArrowRight size={15} /></a></div>
          <div className="hero-note"><span className="note-star">✳</span><span>Personal style, without the rules.</span></div>
        </div>
        <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1539106274469-fb1e2e5a2a2c?auto=format&fit=crop&w=1200&q=90" alt="Editorial fashion portrait in a softly lit neutral-toned setting" />
          <div className="image-caption"><span>THE EVERYDAY EDIT</span><span>VOL. 01&nbsp; / &nbsp;YOUR STYLE</span></div>
          <div className="floating-card"><span className="floating-icon"><Sparkles size={17} /></span><div><strong>A little more you.</strong><small>Style starts with self-expression.</small></div></div>
        </div>
        <a className="scroll-cue" href="#story"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <section className="intro section-pad" id="story">
        <div className="section-kicker">01 / THE IDEA</div>
        <div className="intro-content"><p className="eyebrow">A DIFFERENT KIND OF STYLE TOOL</p><h2>Trends come and go.<br /><em>Your style is yours.</em></h2><p className="intro-text">auraT brings inspiration and intention into your everyday wardrobe. It is a project built around one simple thought: getting dressed should feel less like a puzzle and more like a form of self-expression.</p><a className="underlined-link" href="#contact">Get to know the project <ArrowUpRight size={15} /></a></div>
        <div className="intro-stamp"><span>STYLE</span><span>ON YOUR</span><em>terms.</em><b>✳</b></div>
      </section>

      <section className="features section-pad" id="features">
        <div className="section-heading"><div><div className="section-kicker">02 / THE EXPERIENCE</div><p className="eyebrow">THOUGHTFUL BY DESIGN</p><h2>Good style has<br /><em>a little help.</em></h2></div><p className="heading-aside">A few ways auraT makes your wardrobe work harder, while keeping your individuality at the centre.</p></div>
        <div className="feature-grid">{features.map(item => <article className="feature-card" key={item.number}><div className="feature-top"><span>{item.number}</span><span className="feature-icon">{item.icon}</span></div><h3>{item.title}</h3><p>{item.text}</p><span className="feature-rule" /></article>)}</div>
      </section>

      <section className="showcase section-pad" id="journal">
        <div className="showcase-heading"><div><div className="section-kicker">03 / THE WORLD OF AURAT</div><p className="eyebrow">A WARDROBE, REIMAGINED</p><h2>Small details.<br /><em>Big outfit energy.</em></h2></div><p>Explore the ideas behind a more personal, playful and practical approach to getting dressed.</p></div>
        <div className="project-grid">{projects.map((project, i) => <article className={`project-card project-${i + 1}`} key={project.title}><div className="project-image"><img src={project.image} alt={project.alt} loading="lazy" /><span className="project-index">0{i + 1}</span></div><div className="project-meta">{project.tag}<ArrowUpRight size={15} /></div><h3>{project.title}</h3><p>{project.text}</p></article>)}</div>
      </section>

      <section className="contact section-pad" id="contact"><div className="contact-orbit">✳</div><p className="eyebrow">THE NEXT CHAPTER STARTS HERE</p><h2>Make room for<br /><em>your kind of style.</em></h2><p className="contact-copy">Have an idea, a collaboration in mind, or simply want to say hello?</p><a className="button button-light" href="mailto:hello@aurat.style">Say hello <ArrowUpRight size={16} /></a></section>
    </main>

    <footer className="site-footer"><a className="wordmark footer-mark" href="#home">aura<span>T</span><i>.</i></a><p>Style is personal. Make it intentional.</p><div className="footer-right"><span>© 2026 auraT</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
