// src/pages/ProjectsPage.jsx
import React, { useState } from "react";
import projectData from "../data/details.json";
// Importation des composants de projet spécifiques
import Booki from "../components/Booki_2";
import Modal from "../components/Modal";
import Bluel from "../components/Bluel";
import Kasa from "../components/Kasa";
import Grimoire from "../components/Grimoire";

const Projects = () => {
  // Gestion de l'état pour l'ouverture de la modale
  const [isModalOpen, setModalOpen] = useState(false);
  // Gestion de l'état pour sélectionner le projet à afficher dans la modale
  const [selectedProject, setSelectedProject] = useState(null);
  // Récupération des projets à partir des données JSON
  const projects = projectData.skills.projects || [];

  // Fonction pour ouvrir la modale et afficher le projet sélectionné
  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  // Fonction pour fermer la modale et réinitialiser le projet sélectionné
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null); // Réinitialisation du projet sélectionné
  };

  return (
    <div className="project">
      <h2>Mes Projets</h2>
      <div className="projects-container">
        {/* Composant Booki, avec la liste des projets et la fonction pour gérer le clic sur un projet */}
        <Booki projects={projects} onProjectClick={openModal} />
        {/* Composant Bluel, même configuration que Booki */}
        <Bluel projects={projects} onProjectClick={openModal} />
        {/* Composant Kasa, même configuration que Booki */}
        <Kasa projects={projects} onProjectClick={openModal} />
        {/* Composant Grimoire, même configuration que Booki */}
        <Grimoire projects={projects} onProjectClick={openModal} />
      </div>
      {/* Composant Modal, s'affiche si isModalOpen est true, affiche les détails du projet sélectionné */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};
export default Projects;
