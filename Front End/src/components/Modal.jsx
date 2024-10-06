// src/components/Modal.jsx
import React from "react";

// Composant Modal qui prend trois props : isOpen (pour savoir si la modale est ouverte),
// onClose (fonction pour fermer la modale), et project (détails du projet à afficher dans la modale)
const Modal = ({ isOpen, onClose, project }) => {
  // Si la modale n'est pas ouverte ou si aucun projet n'est sélectionné, retourner null pour ne rien afficher
  if (!isOpen || !project) return null;

  return (
    // Overlay de la modale. Un clic ici fermera la modale en appelant onClose
    <div className="modal-overlay" onClick={onClose}>
      {/* Contenu de la modale. Un clic ici ne fermera pas la modale (évite la propagation de l'événement) */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Bouton de fermeture de la modale représenté par le symbole "×" */}
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>

        <h3>{project.title}</h3>
        {/* Afficher le projet qui contient une vidéo dans un lecteur vidéo */}
        {project.video && (
          <div className="modal-video-container">
            <video
              src={project.video} // Source de la vidéo du projet
              autoPlay // Lecture automatique
              loop // Boucle infinie
              muted // Désactiver le son
              playsInline // Lecture dans le navigateur
              className="modal-video"
            />
          </div>
        )}
        {/* Section avec les détails du projet, divisée en deux colonnes */}
        <div className="modal-details">
          <div className="modal-column">
            <p className="modal-subtitle">Description:</p>
            <p className="left-align">{project.description}</p>

            <p className="modal-subtitle">Problématiques:</p>
            <p className="left-align">{project.problems}</p>
          </div>
          <div className="modal-column">
            <p className="modal-subtitle">Compétences développées:</p>
            <p className="left-align">{project.skillsDeveloped}</p>

            <p className="modal-subtitle">Solutions:</p>
            <p className="left-align">{project.solutions}</p>
          </div>
        </div>
        {/* Boutons permettant de consulter le code GitHub ou la page GitHub du projet */}
        <div className="modal-buttons">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="projet-btn"
          >
            Code GitHub
          </a>
          <a
            href={project.githubPages}
            target="_blank"
            rel="noopener noreferrer"
            className="projet-btn"
          >
            GitHub Pages
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
