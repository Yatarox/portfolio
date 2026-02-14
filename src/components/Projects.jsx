import React, { useState } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: 'Template n°1',
      description: 'A changer',
      tags: ["TODO UPDATE"],
      link: '#'
    },
  ]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Mes Projets</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">Voir le projet →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;