import React from 'react';
import '../styles/Skills.css';

const skills = [
  {
    color: "linear-gradient(135deg, #7c9cff 0%, #a084ee 100%)",
    title: "IA & Machine Learning",
    skills: ["Prédiction", "NLP", "Federated Learning", "Reinforcement Learning"],
  },
  {
    color: "linear-gradient(135deg, #7c9cff 0%, #667eea 100%)",
    title: "Développement Back-End",
    skills: ["API REST", "Bases de données", "Architecture modulaire", "Threading"],
  },
  {
    color: "linear-gradient(135deg, #ffe066 0%, #ff6f91 100%)",
    title: "Automation & Bots",
    skills: ["Scheduling", "Risk control", "Monitoring", "Interaction en temps réel"],
  },
  {
    color: "linear-gradient(135deg, #ff6f91 0%, #e84a5f 100%)",
    title: "DevOps & Monitoring",
    skills: ["Sécurité", "Alertes", "Déploiement continu", "Interface Streamlit"],
  },
  {
    color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    title: "Web & Data",
    skills: ["Node.js", "Symfony", "FastAPI", "MongoDB", "MySQL", "PHP"],
  },
];

function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="skills-title">Compétences</h2>
        <p className="skills-desc">
          Expertise technique dans plusieurs domaines de l'intelligence artificielle et du développement
        </p>
        <div className="skills-grid">
          {skills.map((cat, idx) => (
            <div className="skill-card" key={idx} style={{background: cat.color}}>
              <h3>{cat.title}</h3>
              <div className="skill-skills">
                {cat.skills.map((skill, i) => (
                  <span className="skill-skill" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;