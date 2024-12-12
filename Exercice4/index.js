// Sélectionne le bouton à l'aide de son ID
const button = document.getElementById("myButton");

// Ajoute un écouteur d'événement pour détecter le clic
button.addEventListener("click", () => {
  // Vérifie si le paragraphe existe déjà
  let messageParagraph = document.getElementById("message");
  if (!messageParagraph) {
    // Crée un nouveau paragraphe
    messageParagraph = document.createElement("p");
    messageParagraph.id = "message";
    messageParagraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";

    // Ajoute le paragraphe sous le bouton
    button.insertAdjacentElement("afterend", messageParagraph);
  }
});
