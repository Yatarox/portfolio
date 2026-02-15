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
            <span className="nav-label">accueil</span>
          </a>
          <a href="#about" className="nav-link">
            <span className="nav-index">02</span>
            <span className="nav-label">a propos</span>
          </a>
          <a href="#projects" className="nav-link">
            <span className="nav-index">03</span>
            <span className="nav-label">projets</span>
          </a>
          <a href="#skills" className="nav-link">
            <span className="nav-index">04</span>
            <span className="nav-label">competences</span>
          </a>
          <a href="#contact" className="nav-link">
            <span className="nav-index">05</span>
            <span className="nav-label">contact</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;