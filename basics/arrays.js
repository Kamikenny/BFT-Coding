// 1.
/* 
const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"];

leaderboard[1] = "Luna";
leaderboard[leaderboard.length - 1] = "Draco";

console.log(leaderboard)
 */

// 2.
/* 
const initialArray = [
  null,
  true,
  ["Apple", "two", undefined],
  false,
  ["three", "BeCode"],
  4,
  "I am a big bad wolf",
  ["one"], 
];


const exo = [initialArray[7][0], initialArray[2][1], initialArray[4][0]];
console.log(exo);
 */

// 3.
/* 
const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"];

planets.shift();
planets.push("Saturne");
planets.unshift("Mercury");

console.log(planets);
 */

// -------------------
// --------- EXOS arrays
// -------------------

// 1. Accéder au premier et au dernier élément
/* 
const fruits = ["fruit0", "fruit1", "fruit2", "fruit3", "fruit4", "fruit5"];

console.log(`Premier Fruit : ${fruits[0]}`);
console.log(`Dernier Fruit : ${fruits[fruits.length - 1]}`);
 */
// 2. Modifier un élément d’un tableau
/* 
const couleurs = ["rouge", "vert", "bleu"];

console.log(couleurs);
couleurs.splice(1, 1, "Jaune");
console.log(couleurs);
 */
// 3. Ajouter un élément à la fin
/* 
const animaux = ["chien", "chat", "poisson", "chèvre", "loup"];

console.log(animaux);
animaux.push("tigre");
console.log(animaux);
 */
// 4. Ajouter un élément au début
/* 
const sports = ["sport0", "sport1", "sport2", "sport3"];

console.log(sports);
sports.unshift("sport-1");
console.log(sports);
 */

// 5. Supprimer le dernier élément
/* 
const villes = ["ville0", "ville1", "ville2", "ville3"];

console.log(villes);
villes.pop();
console.log(villes);
 */

// 6. Supprimer le premier élément
/* 
const countries = ["pays0", "pays1", "pays2", "pays3"];

console.log(countries);
countries.shift();
console.log(countries);
 */

// 7.
/* 
const jours = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];

console.log(jours.indexOf("jeudi"));
 */

// 8.
/* 
const langages = ["C#", "C++", "Lua", "JavaScript"];

console.log("Is JavaScript here ? : " + langages.includes("JavaScript"));
 */

// 9.
/* 
const nombres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNombres = nombres.slice(0, 3);

console.log(newNombres);
 */

// 10.
/* 
const mois = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

console.log(mois);
mois.splice(2, 2, "Spring Break");
console.log(mois);
 */

// 11. Vérification d'un Itinéraire de Voyage
/* 
const correct = ["Paris", "Lyon", "Marseille"];
const test = ["Paris", "Lyon", "Marseille"];

if (test.toString() !== correct.toString()) {
  if (test[0] !== correct[0]) {
    console.log(
      `Erreur : Le point de départ (${test[0]}) n'est pas : ${correct[0]}.`,
    );
  }

  if (test[test.length - 1] !== correct[correct.length - 1]) {
    console.log(
      `Erreur : La destination (${test[test.length - 1]}) n'est pas : ${
        correct[correct.length - 1]
      }.`,
    );
  }

  if (test.length !== correct.length) {
    console.log(
      `Erreur : L'itinéraire ne comporte pas le bon nombre d'étapes (${correct.length}).`,
    );
  }
} else {
  console.log("Intinéraire valide. Prêt à expédier.");
}
 */

// 13 : Gestion d'un Podium de Course
/* 
const tempsDesJoueurs = {
  Alex: 12.5,
  Sophie: 11.8,
  Paul: 12.1,
};

let gagnant = "";
let plusRapide = Number.POSITIVE_INFINITY;

if (tempsDesJoueurs.Alex < plusRapide) {
  plusRapide = tempsDesJoueurs.Alex;
  gagnant = "Alex";
}

if (tempsDesJoueurs.Sophie < plusRapide) {
  plusRapide = tempsDesJoueurs.Sophie;
  gagnant = "Sophie";
}

if (tempsDesJoueurs.Paul < plusRapide) {
  plusRapide = tempsDesJoueurs.Paul;
  gagnant = "Paul";
}

console.log(
  `Le meilleur temps est celui de ${gagnant} avec un chrono de ${plusRapide} secondes !`
);
 */
// 14 : Contrôle d'Accès à une Zone Sécurisée
/* 
const personnesDetectees = ["Employé"];
const badgeScanne = "Badge Secret";

if (
  personnesDetectees.length === 1 &&
  personnesDetectees[0] === "Employé" &&
  badgeScanne === "Badge Secret"
) {
  console.log("Vous pouvez entrer.");
}

if (personnesDetectees.length !== 1) {
  console.log("Accès refusé : Plusieurs personnes détectées.");
} else if (personnesDetectees[0] !== "Employé") {
  console.log("Accès refusé : Personne non autorisée.");
} else if (badgeScanne !== "Badge Secret") {
  console.log("Accès refusé : Badge invalide.");
}
 */
