// 6. Compteur
/* 
let compteur = 1;

while (compteur <= 10) {
  console.log(compteur);
  compteur++;
}
 */

// 7. Trouver le premier multiple de 7 supérieur à 30
/* Utilise une boucle while pour trouver le premier multiple de 7 supérieur à 30 et affiche-le. */
/* 
let x = 31;

while (x % 7 !== 0) {
  x++;
}

console.log(x);
 */

// 8. Demander un nombre positif à l’utilisateur
/* Utilise prompt pour demander un nombre à l’utilisateur. Continue de demander tant qu’il entre un nombre négatif, puis affiche le nombre valide. */
/* 
let x = -1;

while (x < 0) {
  x = parseInt(prompt("Veuillez entrer un nombre entier positif :"));
}

console.log(`Merci, vous avez entré le nombre ${x}`);
 */

// 9. Retirer les éléments d’un tableau un par un
/* Crée un tableau tâches avec quelques éléments. Utilise une boucle while pour retirer et afficher chaque élément jusqu’à ce que le tableau soit vide. */
/* 
const tasks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

while (tasks.length > 0) {
  console.log(tasks.pop());
}
 */

// 10. Générer un nombre aléatoire jusqu’à obtenir 5
/* Utilise Math.random() pour générer des nombres entre 1 et 10. Continue tant que tu n’obtiens pas 5, et affiche chaque nombre généré. */
/* 
let x = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let count = 1;

while (x !== 5) {
  console.log(`Tentative ${count} : ${x}`);
  x = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  count++;
}

console.log(`Tentative ${count} : ${x}`);
 */
