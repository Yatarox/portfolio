import React from 'react';
import '../styles/Experience.css';

const experiences = [
  {
    title: "Développeur logiciels",
    company: "AALIA.TECH",
    type: "CDD",
    date: "juin 2025 - aujourd’hui · 9 mois",
    location: "Ville de Paris, Île-de-France, France · Sur site",
    description: "Développement de solution pour AALIA.TECH",
    skills: ["Python", "Développement logiciel"]
  },
  {
    title: "Stagiaire en informatique",
    company: "LIED (UMR 8236)",
    type: "Stage",
    date: "janv. 2025 - févr. 2025 · 2 mois",
    location: "Ville de Paris, Île-de-France, France · Hybride",
    description: "Conception et développement d’une application web interne en Flask (Python) pour faciliter la gestion de données et d’activités au sein du laboratoire.",
    skills: ["Flask", "SQLite"]
  },
  {
    title: "Stagiaire en informatique",
    company: "Cour d’appel de Paris",
    type: "Stage",
    date: "mai 2024 - juin 2024 · 2 mois",
    location: "Ville de Paris, Île-de-France, France · Sur site",
    description: "Développement d’applications web en PHP avec Symfony pour le Service Administratif Régional (SAR). Conception et intégration de nouvelles fonctionnalités selon les besoins utilisateurs.",
    skills: ["Symfony", "CSS", "PHP"]
  }
];

function Experience() {
  return (
    <section className="experience">
      <div className="container">
        <h2 className="experience-title">Expérience</h2>
        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div className="experience-card" key={idx}>
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <span className="experience-company">{exp.company} · {exp.type}</span>
              </div>
              <div className="experience-meta">
                <span>{exp.date}</span>
                <span>{exp.location}</span>
              </div>
              <p className="experience-desc">{exp.description}</p>
              <div className="experience-skills">
                {exp.skills.map((skill, i) => (
                  <span className="experience-skill" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;