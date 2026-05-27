/* // Simulateur de combat

const player = {
  nom: "",
  pv: 100,
  atk: 20,
};

const monster = {
  nom: "Monstre",
  pv: 50,
  atk: 15,
};

while (!player.nom) {
  player.nom = prompt("Quel est le nom de votre héros ? :");
}

console.log(`***** Attention ! Le combat va commencer ! *****`);
console.log(`${player.nom} VS ${monster.nom}`);
console.log(`${player.nom} commence avec ${player.pv} points de vie.`);
console.log(`${monster.nom} commence avec ${monster.pv} points de vie.`);

while (player.pv > 0 || monster.pv > 0) {
  // Boucle du combat
  // Début du tour du joueur
  console.log(`C'est au tour de ${player.nom}. Que va-t-il faire ?`);
  let action = "";
  while (action !== "attaquer" && action !== "soigner") {
    action = prompt(
      `Que souhaite-tu faire ${player.nom} ? (Attaquer / Soigner) :`,
    )
      .toLowerCase()
      .trim();
  }
  if (action === "attaquer") {
    console.log(`${player.nom} décide d'attaquer !`);
    let dmg = player.atk * (Math.floor(Math.random() * (15 - 5 + 1) + 5) / 10);
    console.log(`${player.nom} inflige ${dmg} dégâts à ${monster.nom} !`);
    monster.pv -= dmg;
    if (monster.pv <= 0) {
      monster.pv = 0;
      console.log(`Il reste ${monster.pv} à ${monster.nom}.`);
      break;
    }
    console.log(`Il reste ${monster.pv} à ${monster.nom}.`);
  } else {
    console.log(`${player.nom} décide de se soigner !`);
    console.log(`${player.nom} récupère 25 points de vie !`);
    player.pv += 25;
    if (player.pv > 100) {
    }
    player.pv = 100;
    console.log(`${player.nom} a maintenant ${player.pv} points de vie !`);
  } // Fin du tour du joueur

  // Début du tour du monstre
  console.log(`C'est au tour de ${monster.nom}. Il attaque !`);
  let dmg = Math.floor(Math.random() * (15 - 5 + 1) + 5);
  player.pv -= dmg;
  console.log(`${monster.nom} inflige ${dmg} dégâts à ${player.nom} !`);
  console.log(`Il reste ${player.pv} à ${player.nom}.`);
  // Fin du tour du monstre
}

console.log(`***** Le combat est terminé ! *****`);

if (monster.pv <= 0) {
  console.log(`Félicitations ! ${monster.nom} a été vaincu !`);
} else {
  console.log(`Malheureusement ${player.nom} a été vaincu !`);
}
 */
