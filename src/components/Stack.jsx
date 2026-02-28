import React from 'react';
import useInView from '../hooks/useInView';
import {
  SiPython,
  SiR,
  SiPandas,
  SiTensorflow,
  SiMysql,
  SiMariadb,
  SiSqlite,
  SiMongodb,
  SiPhp,
} from 'react-icons/si';
import '../styles/Stack.css';

function Stack() {
  const [ref, visible] = useInView(0.2);

  return (
    <section
      id="stack"
      className={`stack${visible ? ' slidein' : ''}`}
      ref={ref}
    >
      <div className="container stack-inner">
        <h2 className="stack-title">Ma stack technique</h2>
        <div className="stack-categories">
          <div className="stack-category">
            <h3>Langages</h3>
            <div className="stack-badges">
              <span className="stack-badge"><SiPython size={24}/> Python</span>
              <span className="stack-badge"><SiR size={24}/> R</span>
              <span className="stack-badge">C#</span>
              <span className="stack-badge">JavaScript (Node.js)</span>
              <span className="stack-badge"><SiPhp size={24}/> PHP</span>
            </div>
          </div>
          <div className="stack-category">
            <h3>Librairies Python</h3>
            <div className="stack-badges">
              <span className="stack-badge"><SiPandas size={24}/> pandas</span>
              <span className="stack-badge"><SiTensorflow size={24}/> tensorflow</span>
              <span className="stack-badge">FastAPI</span>
              <span className="stack-badge">Flask</span>
              <span className="stack-badge">matplotlib</span>
              <span className="stack-badge">transformers</span>
              <span className="stack-badge">scikit-learn</span>
              <span className="stack-badge">seaborn</span>
            </div>
          </div>
          <div className="stack-category">
            <h3>Librairies R</h3>
            <div className="stack-badges">
              <span className="stack-badge">dplyr</span>
            </div>
          </div>
          <div className="stack-category">
            <h3>Bases de données SQL</h3>
            <div className="stack-badges">
              <span className="stack-badge"><SiMysql size={24}/> MySQL</span>
              <span className="stack-badge"><SiMariadb size={24}/> MariaDB</span>
              <span className="stack-badge"><SiSqlite size={24}/> SQLite</span>
            </div>
          </div>
          <div className="stack-category">
            <h3>NoSQL</h3>
            <div className="stack-badges">
              <span className="stack-badge"><SiMongodb size={24}/> MongoDB</span>
            </div>
          </div>
          <div className="stack-category">
            <h3>Web</h3>
            <div className="stack-badges">
              <span className="stack-badge">Symfony</span>
              <span className="stack-badge"><SiPhp size={24}/> PHP</span>
            </div>
          </div>
          <div className="stack-category">
            <h3>Outils & DevOps</h3>
            <div className="stack-badges">
              <span className="stack-badge">Docker</span>
              <span className="stack-badge">Airflow</span>
              <span className="stack-badge">CI/CD</span>
              <span className="stack-badge">Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;