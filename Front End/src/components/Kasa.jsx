import React from "react";
// Importation de l'image et de la vidéo associées au projet 'Kasa'
import Kasaimage from "../images/Kasa_Projet_5.webp";
import KasaVideo from "../Video/Kasa_vid.mp4";

// Création d'un objet 'images' qui associe les titres des projets à leurs images respectives
const images = {
  Kasa: Kasaimage, // Association du projet 'Kasa' à son image
};
// Composant fonctionnel Booki qui reçoit deux props :
// 'projects' (la liste des projets) et 'onProjectClick' (fonction pour gérer le clic sur un projet)
const Kasa = ({ projects, onProjectClick }) => {
  return (
    <div className="projects-container">
      {/* Vérification si des projets existent */}
      {projects.length > 0 ? (
        // Filtrer la liste des projets pour ne garder que ceux dont le titre est 'Kasa'
        projects
          .filter((project) => project.title === "Kasa")
          .map((project, index) => (
            // Création d'une carte pour chaque projet filtré (ici, uniquement 'Kasa')
            <div
              key={index} // Utilisation de l'index comme clé unique pour chaque projet dans la liste
              className="project-card"
              onClick={() => {
                const video = KasaVideo; // Récupération de la vidéo associée au projet 'Booki'
                console.log("Kasa video:", video);
                // Appel de la fonction onProjectClick avec les détails du projet et la vidéo
                onProjectClick({ ...project, video });
              }}
            >
              {/* Affichage de l'image du projet */}
              <img
                src={
                  images[project.title] || "chemin/vers/image/par_defaut.webp"
                }
                alt={project.title}
                className="project-image"
              />
            </div>
          ))
      ) : (
        // Message affiché si aucun projet n'est disponible
        <p>Aucun projet disponible.</p>
      )}
    </div>
  );
};

export default Kasa;
