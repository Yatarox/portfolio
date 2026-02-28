import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projetsPerso = [
    {
      id: 1,
      title: "Application complète MSPR (TPRE612)",
      description: "Projet d'école : ETL avec Airflow, base MySQL, API FastAPI, modèle de régression à venir, CI/CD et monitoring.",
      tags: ["Scolaire", "Data", "API", "CI/CD", "En cours"]

    },
    {
      id: 2,
      title: "Bot Discord mini-jeux",
      description: "Création d'un bot Discord simple qui propose des mini-jeux pour la communauté.",
      tags: ["Discord", "Jeux", "Perso"]
      
    }
  ];

  const projetsAvenir = [
    {
      id: 3,
      title: "Interface de transformation de données",
      description: "Création d'une interface simple pour transformer et nettoyer des données facilement.",
      tags: ["Data", "Web", "À venir", "Perso"]
    },
    {
      id: 4,
      title: "Modèle IA - Reconnaissance de plats chinois",
      description: "Développement d'un modèle d'intelligence artificielle pour reconnaître des plats chinois à partir d'images.",
      tags: ["IA", "Computer Vision", "Food", "Perso","À venir"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Mes Projets</h2>
        <h3 className="projects-subtitle">Projets personnels / scolaires</h3>
        <div className="projects-grid">
          {projetsPerso.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <h3 className="projects-subtitle">Projets à venir </h3>
        <div className="projects-grid">
          {projetsAvenir.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;