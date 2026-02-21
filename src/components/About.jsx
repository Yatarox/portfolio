import React from 'react';
import useInView from '../hooks/useInView';
import '../styles/About.css';

function About() {
  const [ref, visible] = useInView(0.2);

  return (
    <section
      id="about"
      className={`about${visible ? ' slidein' : ''}`}
      ref={ref}
    >
      <div className="container about-inner">
        <div className="about-grid">
          <div className="about-photo">
            <img src="/images/change_me.jpg" alt="Léo Li" />
          </div>
          <div className="about-main">
            <h2 className="about-title">Qui suis-je ?</h2>
            <p className="about-intro">
              Étudiant en informatique depuis 2023, spécialité IA & Data Science chez EPSI Paris.<br />
              Bienvenu sur mon portfolio ! Passionné par l’intelligence artificielle et ses applications, j’aime explorer les possibilités offertes par la data science.<br />
              Je recherche une alternance pour la rentrée 2026 dans le domaine de l’IA et la data science. N’hésitez pas à me contacter ou à consulter mon CV pour plus d’informations : <a href="/files/CV_Leo_LI.pdf" target="_blank" rel="noopener noreferrer">CV Léo Li</a>.
            </p>
            <div className="about-cards">
              <div className="about-card">
                <h3>Mon parcours</h3>
                <ul>
                  <li>Actuellement : Bachelor 3 Informatique, spécialisation IA & Data Science</li>
                  <li>Projets académiques et personnels en machine learning et data science</li>
                </ul>
              </div>
              <div className="about-card">
                <h3>Mes qualités</h3>
                <ul>
                  <li>Curieux et motivé, surtout dans le domaine de l'IA</li>
                  <li>Autonome et rigoureux</li>
                  <li>Esprit d’équipe</li>
                  <li>Capacité d'adaptation</li>
                  <li>Communication efficace</li>
                </ul>
              </div>
              <div className="about-card">
                <h3>Ce que j’aime</h3>
                <ul>
                  <li>Monter en compétences</li>
                  <li>Partager mes connaissances</li>
                  <li>Découvrir de nouvelles technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;