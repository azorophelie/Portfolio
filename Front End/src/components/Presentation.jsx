import React from "react";
import presentationData from "../data/details.json"; // Importation des données de présentation à partir d'un fichier JSON

// Fonction pour gérer les clics sur les boutons et ouvrir un lien dans un nouvel onglet
const handleButtonClick = (url) => {
  window.open(url, "_blank"); // Ouvre l'URL spécifiée dans un nouvel onglet
};

const Presentation = () => {
  return (
    <div className="intro-container">
      <div className="introduction">
        <h1>{presentationData.presentation.intro}</h1>
        <div className="buttons-intro">
          {/* Bouton pour envoyer un e-mail */}
          <button
            onClick={() => handleButtonClick("mailto:azorophelie@yahoo.com")}
          >
            <i className="fas fa-envelope"></i> Me contacter
          </button>
          {/* Bouton pour ouvrir le CV au format PDF */}
          <button onClick={() => handleButtonClick("path/to/cv.pdf")}>
            <i className="fas fa-file-pdf"></i> Mon CV
          </button>
          {/* Bouton pour accéder au profil GitHub */}
          <button
            onClick={() => handleButtonClick("https://github.com/azorophelie")}
          >
            <i className="fab fa-github"></i> GitHub
          </button>
        </div>
      </div>
      <section className="presentation">
        <h2>Présentation</h2>
        {/* Section pour la présentation personnelle avec des détails provenant du fichier JSON */}
        <p>{presentationData.presentation.name}</p>
        <p>{presentationData.presentation.age}</p>
        <p>{presentationData.presentation.background}</p>
        <p>{presentationData.presentation.mission}</p>
      </section>
    </div>
  );
};

export default Presentation;
