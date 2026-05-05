//Exercice 1
/* 
let nom = prompt(`Veuillez entrer un nom :`);
let preference = prompt(`Préférez-vous les chiens ou les chats ?`);

if (preference.toLocaleLowerCase().includes("chat")) {
  console.log(`Bonjour ${nom}, tu préfères les chats.`);
} else if (preference.toLocaleLowerCase().includes("chien")) {
  console.log(`Bonjour ${nom}, tu préfères les chiens.`);
} else {
  console.log(`Bonjour ${nom}, tu n'aime aucun des deux.`);
}
 */
//Exercice 2
/* 
let age = parseInt(prompt(`Quel âge as-tu ? :`));

if (age < 18) {
  alert(
    `Désolé, vous êtes trop jeune pour conduire cette voiture. Arrêt en cours.`
  );
} else if (age === 18) {
  alert(
    `Félicitations pour votre première année de conduite. Profitez du trajet !`
  );
} else if (age > 18) {
  alert(`Mise en marche. Profitez du trajet !`);
} else {
  alert(`Je crois qu'on s'est mal compris...`);
}
 */
//Exercice 3
/* 
const mystery = "PPPPP7";
// MODIFIEZ CETTE VALEUR POUR QUE LA CONDITION CI-DESSOUS SOIT VRAIE
// NE TOUCHEZ PAS À CE CODE ! (s'il vous plaît)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("VOUS AVEZ RÉUSSI !!!");
} else {
  console.log("ESSAYEZ ENCORE");
}
 */
//Exercice 4
/* 
const fruit = prompt(`Quel est ton fruit favori? :`);

if (fruit.toLowerCase().includes("banane")) {
  console.log("Moi aussi j'aime les bananes !");
} else if (fruit.toLowerCase().includes("fraise")) {
  console.log(`Moi aussi j'aime les fraises !`);
} else if (fruit.toLowerCase().includes("raisin")) {
  let couleur = prompt(
    `Est-ce que tu préfères les raisins violets ou les raisins verts? :`
  );
  if (couleur.toLowerCase().includes("violet")) {
    console.log(`Je n'aime pas les raisins violets.`);
  } else if (couleur.toLowerCase().includes("vert")) {
    console.log(`Ouais, c'est pas mauvais...`);
  } else {
    console.log(`Je ne comprends pas...`);
  }
} else {
  console.log(`Je ne connais pas ce fruit : "${fruit}"`);
}
 */
// --------------------------------------------
// --------- EXTRAS ---------------------------
// --------------------------------------------

//Exercice 1
/* 
let mail = prompt(`Veuillez entrer votre adresse mail :`);

while (
  mail.indexOf("@") < 1 ||
  mail.lastIndexOf(".") >= mail.length - 2 ||
  mail.indexOf("@") === mail.lastIndexOf(".") - 1
) {
  alert("Votre adresse mail n'est pas conforme.");
  mail = prompt(`Veuillez entrer votre adresse mail :`);
}

alert("Merci");
 */

//Exercice 2
/* 
const pin = "0123";

while (prompt("Veuillez entrer le code pin :") !== pin) {
  alert("Ce n'est pas le bon code");
}

alert("Bienvenue");
 */

//Exercice 3
/* 
const jour = prompt("Quel jour sommes-nous ? :");
const heure = prompt("Quelle heure est-il ? :");

if (
  jour.toLowerCase().includes("dimanche") ||
  parseInt(heure) < 9 ||
  parseInt(heure) > 18
) {
  alert("Désolé, le magasin est fermé.");
} else {
  alert("Le magasin est ouvert.");
}
 */
// --------------------------------------------
// ----- EXTRAS 12b ---------------------------
// --------------------------------------------

//  1. Calculateur d'Indice de Masse Corporelle (IMC) :
/* 
const poids = parseFloat(prompt("Quel est votre poids (en Kg) ? :"));
const taille = parseFloat(prompt("Quelle est votre taille (en mètres) ? :"));
const imc = (poids / taille ** 2).toFixed(1);

console.log(`Votre IMC est : ` + imc);

if (isNaN(imc)) {
  alert("Une erreur s'est produite");
} else if (imc < 18.5) {
  console.log("Selon votre IMC, vous êtes en insuffisance pondérale");
} else if (imc < 25) {
  console.log("Selon votre IMC, vous êtes en poids normal");
} else {
  console.log("Selon votre IMC, vous êtes en surpoids");
}
 */

// 2. Validateur de Code Promotionnel Simple :
/* 
const prix = parseInt(prompt("Quel est le prix de l'article ? :"));
const reduction = prompt("Avez-vous un code de réduction ? (oui / non) :").toLowerCase();

if (reduction.includes("oui")) {
  const code = prompt("Quel est votre code de réduction ? :").toUpperCase();

  if (code === "REDUC15") {
    console.log(
      `Grâce à la réduction, votre article coûte ${prix - (prix * 15) / 100}`
    );
  } else if (code === "SUPER50") {
    console.log(`Grâce à la réduction, votre article coûte ${prix / 2}`);
  } else {
    console.log(`Code invalide. Aucune réduction appliquée.`);
  }
} else if (reduction.includes("non")) {
  console.log(
    "Aucune réduction. Le prix de votre artcile est toujours " + prix
  );
}
 */

// 3. Extracteur de Milieu de Mot :
/* 
const mot = prompt("Veuillez entrer un mot :");

if (mot.length % 2 === 0) {
  console.log("Votre mot a un nombre de caractères pair.");
  console.log(
    "Voici les deux caractères du milieu : " +
      mot.slice(mot.length / 2 - 1, mot.length / 2 + 1)
  );
} else {
  console.log("Votre mot a un nombre de caractères impair.");
  console.log(
    "Voici le caractère du milieu : " + mot[Math.floor(mot.length / 2)]
  );
}
 */

// 4. Vérificateur de Symétrie de Mot (Début/Fin) :
/* 
const mot = prompt("Veuillez entrer un mot :");

if (mot[0].toLowerCase() === mot[mot.length - 1].toLowerCase()) {
  console.log("Le premier et le dernier caractères sont identiques.");
} else {
  console.log("Le premier et le dernier caractères sont différents.");
}
 */

// 5. Générateur de Nombres dans une Plage Spécifique :
/* 
let number = Math.floor(Math.random() * (79 - 21 + 1) + 21); //Math.floor(Math.random() * (maxInclus - minInclus + 1) + minInclus)
console.log(number);
 */

// 6. Analyseur de Force de Mot de Passe Basique :
/* 
const pass = prompt(
  "Veuillez proposer un mot de passe, je vais analyser sa force :"
);

if (pass.length < 6) {
  console.log("Votre mot de passe est faible.");
} else if (6 <= pass.length && pass.length <= 9) {
  console.log("Votre mot de passe est moyen.");
} else {
  console.log("Votre mot de passe est fort.");
}
 */

// 7. Séparateur de Composants de Date :
/* 
const date = prompt("Veuillez entrer une date (format JJ/MM/AAAA) :");

console.log("Jour : " + date.slice(0, 2));
console.log("Jour : " + date.slice(3, 5));
console.log("Jour : " + date.slice(6, date.length));
 */

// 8. Comparateur de Longueurs de Chaînes :
/* 
const un = prompt("Veuillez entrer un premier STRING:");
const deux = prompt("Veuillez entrer un second STRING:");

if (un.length > deux.length) {
  console.log(
    `Le premier string est plus long de ${un.length - deux.length} caractères.`
  );
} else if (un.length === deux.length) {
  console.log("Les deux strings ont la même longueur");
} else {
  console.log(
    `Le second string est plus long de ${deux.length - un.length} caractères.`
  );
}
 */

// 9. Calculateur d'Hypoténuse :
/* 
const un = prompt(
  "Veuillez entrer la longueur du premier côté de l'angle droit (en cm) :"
);
const deux = prompt(
  "Veuillez entrer la longueur du second côté de l'angle droit (en cm) :"
);

const hypotenuse = Math.sqrt(un * un + deux * deux);

console.log(
  `La longueur de l'hypoténuse de votre triangle est : ${hypotenuse} cm.`
);
 */

// 10. Détermination de Quadrant Cartésien :
