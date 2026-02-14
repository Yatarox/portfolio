import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-name">Léo Li</h1>
        <p className="hero-subtitle">Etudiant Bachelor 3</p>
        <p className="hero-role"><span className="highlight">Dev IA & Data Scientist</span></p>
        <p className="hero-tech">ML • Python • Data Analytics</p>
        <button className="cta-button" onClick={() => window.location.href = "#projects"}>Voir mes projets</button>
      </div>
    </section>
  );
}

export default Hero;