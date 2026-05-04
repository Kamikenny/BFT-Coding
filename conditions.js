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
// --------- EXTRAS --------

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

//Exercice 4
