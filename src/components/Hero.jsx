import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>Bienvenue !</h2>
        <p>Etudiant Bachelor 3 <span className="highlight">Dev IA & Data Scientist</span></p>
        <p className="subtitle">ML • Python • Data Analytics</p>
        <button className="cta-button" onClick={() => window.location.href = "#projects"}>Voir mes projets</button>
      </div>
    </section>
  );
}

export default Hero;