function pairNumbers(min, max) {
  let result = ""; // Initialisation de la chaîne de caractères pour stocker les nombres pairs
  for (let i = min; i <= max; i++) {
    // Boucle de min à max
    if (i % 2 === 0) {
      // Vérification si le nombre est pair
      result += i + ","; // Ajoute le nombre à la chaîne avec une virgule
    }
  }
  return result.slice(0, -1); // Supprime la dernière virgule et retourne la chaîne
}

// Exemple d'utilisation
console.log(pairNumbers(2, 20));

export default pairNumbers;
