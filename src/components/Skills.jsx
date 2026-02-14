import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skills = {
    "Categ" : ["TODO UPDATE"]
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Compétences</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <ul>
                {skillList.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;