import React, { useState, useEffect } from "react";
import "react-router-dom";

const Header = () => {
  const [showName, setShowName] = useState(true); // État pour afficher ou masquer le nom
  const [darkMode, setDarkMode] = useState(false); // État pour gérer le mode sombre
  const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture du menu burger
  const [activeLink, setActiveLink] = useState("presentation"); // Pour que le lien soit active quand on clique dessus

  // Utilisation de useEffect pour alterner l'affichage du nom toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setShowName((prev) => !prev);
    }, 5000);
    // Nettoyage de l'intervalle pour éviter les fuites de mémoire
    return () => clearInterval(interval);
  }, []);

  // Fonction pour basculer entre le mode sombre et le mode clair
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  };

  // Fonction pour ouvrir/fermer le menu burger
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  

  // useEffect pour ajouter et retirer l'événement de scroll
  useEffect(() => {
    // Fonction pour fermer le menu lorsque la page est scrollée
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]); // Se déclenche uniquement lorsque menuOpen change

  // Fonction pour créer des spans avec une animation pour chaque lettre
  const getAnimatedLetters = (text) => {
    return text.split("").map((letter, index) =>
      letter === " " ? (
        <span key={index} className="space">
          &nbsp;
        </span>
      ) : (
        <span
          key={index}
          className="letter"
          style={{ animationDelay: `${index * 0.1}s` }} // Animation de chaque lettre avec un délai
        >
          {letter}
        </span>
      ),
    );
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="name-mode">
          {/* Nom avec animation, affiché ou masqué selon `showName` */}
          <div className={`name ${showName ? "show-name" : "hide-name"}`}>
            {getAnimatedLetters("Ophélie Azor")}
          </div>
          {/* Bouton pour basculer entre mode clair et mode sombre */}
          <button
            onClick={toggleDarkMode}
            className={`dark-mode-toggle ${darkMode ? "dark-mode-toggle" : "light-mode-toggle"}`}
          >
            {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>
        </div>

        {/* Menu Burger pour version mobile */}
        <div
          className={`burger-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>

        {/* Menu Mobile */}
        <ul className={`navLinks ${menuOpen ? "open" : ""}`}>
          {/* Liens de navigations pour le menu */}
          <li>
            <a
              href="#presentation"
              className={`lien-header ${activeLink === "presentation" ? "active" : ""}`}
              onClick={() => setActiveLink("presentation")}
            >
              Présentation
            </a>
          </li>
          <li>
            <a
              href="#competences"
              className={`lien-header ${activeLink === "competences" ? "active" : ""}`}
              onClick={() => setActiveLink("competences")}
            >
              Mes Compétences
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`lien-header ${activeLink === "projects" ? "active" : ""}`}
              onClick={() => setActiveLink("projects")}
            >
              Mes Projets
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`lien-header ${activeLink === "contact" ? "active" : ""}`}
              onClick={() => setActiveLink("contact")}
            >
              {" "}
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
