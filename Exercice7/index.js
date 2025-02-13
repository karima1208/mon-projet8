function convertToBinary() {
  // Récupère la valeur saisie par l'utilisateur
  const decimalInput = document.getElementById("decimalInput").value;
  const binaryResult = document.getElementById("binaryResult");

  // Vérifie si l'entrée est un nombre entier valide
  if (
    isNaN(decimalInput) ||
    decimalInput.trim() === "" ||
    !Number.isInteger(Number(decimalInput))
  ) {
    return;
  }

  // Convertit le nombre décimal en binaire
  const decimalNumber = Number(decimalInput);
  const binary = decimalNumber.toString(2);

  // Affiche le résultat binaire
  binaryResult.textContent = `Résultat binaire : ${binary}`;
}
