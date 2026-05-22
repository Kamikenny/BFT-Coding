/* // Pierre - Papier - Ciseaux

const actions = ["pierre", "papier", "ciseaux"];
const scores = {
  joueur: 0,
  ordi: 0,
};
let ordi = "";
let joueur = "";

const victoire =
  `Félicitations ! C'est toi qui gagne cette manche !\n` +
  `Tu as joué "${joueur}" et moi "${ordi}".`;
const defaite =
  `Malheureusement, c'est moi qui gagne cette manche !\n` +
  `Tu as joué "${joueur}" et moi "${ordi}".`;

alert(
  `Bonjour, nous allons jouer à "Pierre-Papier-Ciseaux".\n` +
    "Le premier à 3 victoires gagne !",
);

while (scores.joueur < 3 && scores.ordi < 3) {
  ordi = actions[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
  joueur = "";

  while (!actions.includes(joueur)) {
    joueur = prompt(
      "J'ai choisi ! Veuillez choisir votre action :\n" +
        "(Pierre - Papier - Ciseaux)",
    )
      .toLowerCase()
      .trim();
  }

  if (joueur === ordi) {
    console.log(
      `EGALITE ! Nous avons joué la même action ! (${joueur} / ${ordi})`,
    );
    for (score in scores) {
      console.log(`${score} : ${scores[score]}`);
    }
  } else if (joueur === "pierre") {
    if (ordi === "papier") {
      scores.ordi += 1;
      console.log(defaite);
    } else {
      scores.joueur += 1;
      console.log(victoire);
    }
    for (score in scores) {
      console.log(`${score} : ${scores[score]}`);
    }
  } else if (joueur === "papier") {
    if (ordi === "ciseaux") {
      scores.ordi += 1;
      console.log(defaite);
    } else {
      scores.joueur += 1;
      console.log(victoire);
    }
    for (score in scores) {
      console.log(`${score} : ${scores[score]}`);
    }
  } else {
    if (ordi === "pierre") {
      scores.ordi += 1;
      console.log(defaite);
    } else {
      scores.joueur += 1;
      console.log(victoire);
    }
    for (score in scores) {
      console.log(`${score} : ${scores[score]}`);
    }
  }
}

if (scores.joueur === 3) {
  console.log(`BRAVO !! C'est toi qui a gagné cette partie !`);
} else {
  console.log(`DESOLE !! C'est qui ai gagné cette partie ! `);
}

 */