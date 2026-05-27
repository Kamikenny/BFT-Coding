/* 
// Jeu : deviner le nombre

let nombreMax = parseInt("");
let essais = 0;

alert(
  "Bienvenue !\nLe jeu est simple. Je vais vous demander un nombre (entier) qui sera le maximum.\nEnsuite, je vais choisir un nombre compris entre 1 et ce maximum et vous devrez le deviner !\nJe vous aiderai en vous disant s'il est plus petit ou plus grand.",
);

while (isNaN(nombreMax) || nombreMax < 2) {
  nombreMax = parseInt(
    prompt("Veuillez entrer le nombre maximum pour le jeu : "),
  );
  if (nombreMax < 2) {
    alert("Le nombre maximum DOIT être plus grand que 1.");
  } else if (isNaN(nombreMax)) {
    alert(
      "Vous DEVEZ entrer un nombre, sinon on ne peut pas continuer le jeu.",
    );
  }
}

const nombreCorrect = Math.floor(Math.random() * (nombreMax - 1 + 1) + 1);

alert("Parfait ! J'ai choisi ! A vous de le deviner maintenant !");

let nombreTest = parseInt(
  prompt("Quel nombre pensez-vous que j'ai choisi ? :"),
);

while (nombreTest !== nombreCorrect) {
  if (isNaN(nombreTest)) {
    alert(`ERREUR. Vous DEVEZ entrer un nombre.`);
    nombreTest = parseInt(
      prompt("Quel nombre pensez-vous que j'ai choisi ? :"),
    );
  }
  if (nombreTest < nombreCorrect) {
    essais++;
    alert(
      `MINCE ! Mon nombre est plus grand que ${nombreTest}.\nTentatives : ${essais}`,
    );
    nombreTest = parseInt(
      prompt("Quel nombre pensez-vous que j'ai choisi ? :"),
    );
  } else if (nombreTest > nombreCorrect) {
    essais++;
    alert(
      `MINCE ! Mon nombre est plus petit que ${nombreTest}.\nTentatives : ${essais}`,
    );
    nombreTest = parseInt(
      prompt("Quel nombre pensez-vous que j'ai choisi ? :"),
    );
  }
}
essais++;
alert(
  `BRAVO ! Mon nombre était bien ${nombreCorrect} !\nVous l'avez trouvé en ${essais} essai(s)!`,
);
 */
