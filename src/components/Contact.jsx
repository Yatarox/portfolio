import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Me Contacter</h2>
        <p className="contact-subtitle">Retrouve-moi sur :</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/l%C3%A9o-li-98b7942a0/" target="_blank" rel="noopener noreferrer" className="contact-link">
            LinkedIn
          </a>
          <a href="https://github.com/Yatarox" target="_blank" rel="noopener noreferrer" className="contact-link">
            GitHub
          </a>
          <a href="mailto:lileo.pro@gmail.com" className="contact-link">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;