import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Léo Li</h1>
        <nav className="nav">
          <a href="#home">Accueil</a>
          <a href="#projects">Projets</a>
          <a href="#skills">Compétences</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;