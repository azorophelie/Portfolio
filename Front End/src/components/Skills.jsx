import React, { useState } from "react";
import data from "../data/details.json";

const Competences = () => {
  return (
    <section className="competences">
      <h2>Mes Compétences</h2>

      <div className="section-container">
        <div className="front-back-container">
          <div className="section">
            {/* Conteneur pour les cartes des compétences Front-End*/}
            <h3>Front-End</h3>
            <div className="card-container">
              {/*} Boucle pour afficher chaque compétence Front-End */}
              {data.skills.frontEnd.map((skill, index) => (
                <Card key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="section">
            {/* Conteneur pour les cartes des compétences Back-End*/}
            <h3>Back-End</h3>
            <div className="card-container">
              {data.skills.backEnd.map((skill, index) => (
                <Card key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="tools-container">
          <div className="section">
            {/* Conteneur pour les cartes des Outils*/}
            <h3>Outils</h3>
            <div className="card-container">
              {data.skills.tools.map((tool, index) => (
                <Card key={index} skill={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant pour représenter une compétence sous forme de carte
const Card = ({ skill }) => {
  const [isFlipped, setIsFlipped] = useState(false); // État pour gérer si la carte est retournée ou non

  // Fonction pour basculer l'état de la carte retournée au clic
  const handleClick = () => {
    setIsFlipped(!isFlipped); // Inverse l'état isFlipped
  };

  return (
    <div className="card" onClick={handleClick}>
      {/* Conteneur de la carte avec animation */}
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Face avant de la carte */}
        <div className="card-front">
          {/* Icon de la carte */}
          <div className="card-icon">
            <i className={skill.icon}></i>
          </div>
          {/* Contenu de la carte */}
          <div className="card-content">
            <h4>{skill.title}</h4>
          </div>
        </div>
        {/* Face arrière de la carte */}
        <div className="card-back">
          {/* Description de la compétence */}
          <p>{skill.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Competences;
