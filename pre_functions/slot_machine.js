/* 
// Machine à sous

let game = true;
let solde = 50.0;
let count = 0;
const cout = 5.5;
const symboles = ["Cerise", "Cloche", "Sept"];
const max = symboles.length - 1;

alert(
  `***** SLOT MACHINE *****\n` +
    `Bienvenue à la Slot Machine !\n` +
    `Vous commencez avec ${solde.toFixed(2)} crédits. Chaque partie coûte ${cout.toFixed(2)} crédits. Vous ne pouvez plus jouer quand vous n'avez plus assez de crédits.`,
);

while (game) {
  let jeu = prompt(
    `Voulez-vous jouer une partie ? (Oui / Non)\n` +
      `${solde.toFixed(2)} / ${cout.toFixed(2)} crédits.`,
  )
    .trim()
    .toLowerCase();

  switch (jeu) {
    case "oui":
      if (solde >= 5.5) {
        solde -= 5.5;
        count++;
        let result = [];
        for (i = 0; i < symboles.length; i++) {
          result[i] = symboles[Math.floor(Math.random() * (max - 0 + 1) + 0)];
        }
        // Test pour double
        if (result[0] === result[1] || result[0] === result[2]) {
          // Test pour triple
          if (result[1] === result[2]) {
            console.log(`${result[0]} - ${result[1]} - ${result[2]}`);
            console.log(`***** INCROYABLE !! *****`);
            console.log(`Vous touchez le JACKPOT de 50.00 crédits !!`);
            solde += 50.0;
            console.log(
              `Votre solde s'élève maintenat à : ${solde.toFixed(2)} crédits.`,
            );
          } else {
            // résultat double
            console.log(`${result[0]} - ${result[1]} - ${result[2]}`);
            console.log(`** Félicitations !! **`);
            console.log(`Vous gagnez 10.00 crédits !!`);
            solde += 10.0;
            console.log(
              `Votre solde s'élève maintenat à : ${solde.toFixed(2)} crédits.`,
            );
          }
        } else {
          // Résultat simple
          console.log(`${result[0]} - ${result[1]} - ${result[2]}`);
          console.log(
            `Malheureusement vous n'avez pas eu de chance cette fois-ci.`,
          );
          console.log(
            `Votre solde s'élève maintenat à : ${solde.toFixed(2)} crédits.`,
          );
        }
      } else {
        alert(`Vous n'avez plus assez de crédits pour jouer.`);
        game = false;
      }
      break;

    case "non":
      game = false;
      break;

    default:
      alert("Commande invalide.");
      break;
  }
}

console.log(`Merci pour votre visite !`);
console.log(
  `Vous repartez avec ${solde.toFixed(2)} crédits après avoir joué ${count} parties.`,
);

 */
