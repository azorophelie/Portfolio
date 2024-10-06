import React from "react";
// Importation de l'image et de la vidéo associées au projet 'Bluel'
import Bluelimage from "../images/Bluel_Projet_3.webp";
import BluelVideo from "../Video/Bluel_vid.mp4";
// Création d'un objet 'images' qui associe les titres des projets à leurs images respectives
const images = {
  Bluel: Bluelimage, // Association du projet 'Bluel' à son image
};

// Composant fonctionnel 'Bluel' qui prend deux props :
// 'projects' (liste des projets) et 'onProjectClick' (fonction déclenchée lorsqu'on clique sur un projet)
const Bluel = ({ projects, onProjectClick }) => {
  return (
    <div className="projects-container">
      {/* Vérification si des projets existent */}
      {projects.length > 0 ? (
        // Filtrer la liste des projets pour ne garder que ceux dont le titre est 'Bluel'
        projects
          .filter((project) => project.title === "Bluel")
          .map((project, index) => (
            // Création d'une carte pour chaque projet filtré (ici, uniquement 'Bluel')
            <div
              key={index} // Utilisation de l'index comme clé unique pour chaque projet dans la liste
              className="project-card"
              onClick={() => {
                const video = BluelVideo; // Récupération de la vidéo associée au projet 'Bluel'
                console.log("Bluel video:", video);
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

export default Bluel;
