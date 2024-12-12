// Fonction pour ajouter un caractère au champ d'affichage
function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value; // Ajoute le caractère au contenu actuel
}

// Fonction pour effacer le champ d'affichage
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = ""; // Vide le contenu de l'affichage
}

// Fonction pour calculer et afficher le résultat
function calculateResult() {
  const display = document.getElementById("display");
  try {
    // Utilise eval pour évaluer l'expression mathématique (sécurisée dans ce contexte)
    const result = eval(display.value);
    display.value = result; // Affiche le résultat
  } catch (error) {
    display.value = "Erreur"; // En cas d'erreur, affiche un message
  }
}
