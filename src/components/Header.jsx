import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <span className="logo-name">Léo Li</span>
          <span className="logo-dot">.</span>
        </div>

        <nav className="nav">
          <a href="#home" className="nav-link">
            <span className="nav-index">01</span>
            <span className="nav-label">Accueil</span>
          </a>
          <a href="#about_categ" className="nav-link">
            <span className="nav-index">02</span>
            <span className="nav-label">À propos</span>
          </a>
          <a href="#experiences_categ" className="nav-link">
            <span className="nav-index">03</span>
            <span className="nav-label">Expérience</span>
          </a>
          <a href="#stack_categ" className="nav-link">
            <span className="nav-index">04</span>
            <span className="nav-label">Stack</span>
          </a>
          <a href="#projects_categ" className="nav-link">
            <span className="nav-index">05</span>
            <span className="nav-label">Projets</span>
          </a>
          <a href="#skill_categ" className="nav-link">
            <span className="nav-index">06</span>
            <span className="nav-label">Compétences</span>
          </a>
          <a href="#contact_categ" className="nav-link">
            <span className="nav-index">07</span>
            <span className="nav-label">Contact</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;