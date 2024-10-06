import React, { useState } from "react";
// Importation de la librairie emailjs-com pour envoyer des emails via EmailJS
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [
    formData,
    setFormData,
    // Définition de l'état initial du formulaire avec useState
    // L'email est déjà pré-rempli avec l'adresse par défaut
  ] = useState({
    name: "",
    email: "azorophelie@yahoo.com",
    subject: "",
    message: "",
  });

  // Fonction de gestion des changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target; // Récupère le nom et la valeur de l'input modifié
    setFormData({
      ...formData, // Garde les autres champs inchangés
      [name]: value, // Met à jour uniquement le champ modifié
    });
  };
  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement par défaut de la page

    // Utilisation de EmailJS pour envoyer l'email
    emailjs
      .send(
        "service_f25dz9p", // Service ID Yahoo EmailJS
        "template_toqv9pp", // Template ID de EmailJS
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }, // Les données du formulaire envoyées à EmailJS
        "9LE5HM_7qPugwbAat", // Clé publique EmailJS
      )
      .then((response) => {
        // Si l'envoi est réuss
        console.log(
          "Email envoyé avec succès!",
          response.status,
          response.text,
        );
        alert("Votre message a bien été envoyé!");

        // Réinitialiser le formulaire en conservant l'e-mail)
        setFormData({
          name: "", // Efface le nom
          email: formData.email, // Garder l'e-mail inchangé
          subject: "", // Efface l'objet
          message: "", // Efface le message
        });
      })
      .catch((error) => {
        // Si une erreur survient lors de l'envoi
        console.error("Erreur lors de l'envoi de l'email:", error);
        alert("Une erreur est survenue, veuillez réessayer plus tard.");
      });
  };

  return (
    <section className="contact">
      <h2>Me contacter</h2>
      <form onSubmit={handleSubmit}>
        {/* Formulaire de contact, avec gestion de la soumission */}
        <fieldset>
          <legend>Formulaire de contact</legend>
          {/* Champ pour le nom de l'utilisateur */}
          <label for="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Champ pour l'email de l'utilisateur (en lecture seule) */}
          <label for="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email} // L'email est fixe
            readOnly
            required
          />

          {/* Champ pour l'objet du message */}
          <label for="subject">Objet :</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange} // Appel de handleChange lors de la modification
            required
          />

          {/* Champ pour le message */}
          <label for="message">Message :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {/* Bouton pour envoyer le formulaire */}
          <button type="submit">Envoyer</button>
        </fieldset>
      </form>
    </section>
  );
};

export default ContactForm;
