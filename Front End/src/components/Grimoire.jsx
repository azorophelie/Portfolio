import React from "react";
// Importation de l'image et de la vidéo associées au projet 'Mon Vieux Grimoire'
import Grimoireimage from "../images/Vieux_Grimoire.webp";
import GrimoireVideo from "../Video/Grimoire_vid.mp4";

// Création d'un objet 'images' qui associe les titres des projets à leurs images respectives
const images = {
  "Mon Vieux Grimoire": Grimoireimage, // Association du projet 'Vieux Grimoire' à son image
};
// Composant fonctionnel Booki qui reçoit deux props :
// 'projects' (la liste des projets) et 'onProjectClick' (fonction pour gérer le clic sur un projet)
const Grimoire = ({ projects, onProjectClick }) => {
  return (
    <div className="projects-container">
      {/* Vérification si des projets existent */}
      {projects.length > 0 ? (
        // Filtrer la liste des projets pour ne garder que ceux dont le titre est 'Mon Vieux Grimoire'
        projects
          .filter((project) => project.title === "Mon Vieux Grimoire")
          .map((project, index) => (
            // Création d'une carte pour chaque projet filtré (ici, uniquement 'Mon Vieux Grimoire')
            <div
              key={index} // Utilisation de l'index comme clé unique pour chaque projet dans la liste
              className="project-card"
              onClick={() => {
                const video = GrimoireVideo; // Récupération de la vidéo associée au projet 'Mon Vieux Grimoire'
                console.log("Grimoire video:", video);
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

export default Grimoire;
