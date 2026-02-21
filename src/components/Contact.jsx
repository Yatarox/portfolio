import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-subtitle">
          Intéressé par mon profil ou mes projets ? <br />
          N'hésitez pas à me contacter ou à consulter mes réseaux !
        </p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/l%C3%A9o-li-98b7942a0/" target="_blank" rel="noopener noreferrer" className="contact-link linkedin">
            <FaLinkedin size={22} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Yatarox" target="_blank" rel="noopener noreferrer" className="contact-link github">
            <FaGithub size={22} />
            <span>GitHub</span>
          </a>
          <a href="mailto:lileo.pro@gmail.com" className="contact-link email">
            <FaEnvelope size={22} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;