import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          © 2026 Léo Li — Portfolio Dev IA & Data Science
        </p>
        <div className="footer-links">
          <a href="https://github.com/Yatarox" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/l%C3%A9o-li-98b7942a0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:lileo.pro@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;