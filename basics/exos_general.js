// 01.
/* 
let x = parseInt("");
let y = parseInt("");

while (isNaN(x)) {
  x = parseInt(prompt("Veuillez entrer un premier nombre entier (x) :"));
}

while (isNaN(y)) {
  y = parseInt(prompt("Veuillez entrer un second nombre entier (y) :"));
}

console.log(`Est-ce que ${x} + ${y} === 65 ?`);
console.log(`${x + y === 65}`);
 */

// 02.
/* 
let age = parseInt("");

while (isNaN(age) || age < 1) {
  age = parseInt(prompt("Veuillez entrer votre âge :"));
}

alert(`Vous avez ${age} an(s). Cela fait ${age * 365} jours.`);
 */

// 03.
/* 
const test = [6, 1, 8, 5, 3, 9, 7];
const resultats = {
  plusPetit: Number.POSITIVE_INFINITY,
  plusGrand: Number.NEGATIVE_INFINITY,
};

for (let i = 0; i < test.length; i++) {
  if (test[i] < resultats.plusPetit) {
    resultats.plusPetit = test[i];
  }

  if (test[i] > resultats.plusGrand) {
    resultats.plusGrand = test[i];
  }
}

console.log(`Le plus grand est ${resultats.plusGrand}`);
console.log(`Le plus petit est ${resultats.plusPetit}`);
 */

// 04.
/* 
const fps = 24;
const minutes = 31;

fpsPerMinutes = minutes * 60 * fps;

console.log(
  `Pour ${minutes} minutes à ${fps} fps, il y a ${minutes * 60 * fps} frames.`
);
 */

// 05.
/* 
const str1 = "je suis très content de cette formation";
const arr1 = str1.split(" ");
const arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  arr2.unshift(arr1[i]);
}

const str2 = arr2.join(" ");
console.log(str2);
 */

// 06.
/* 
const courses = [
  { product: "Milk", quantity: 1, price: 1.5 },
  { product: "Eggs", quantity: 12, price: 0.1 },
  { product: "Bread", quantity: 2, price: 1.6 },
  { product: "Cheese", quantity: 1, price: 4.5 },
];

let total = 0;
let articles = 0;

for (i = 0; i < courses.length; i++) {
  total += courses[i].quantity * courses[i].price;
  articles += courses[i].quantity;
}

console.log(
  `Prix total des courses : ${total.toFixed(2)}€ pour ${articles} articles.`
);
 */

// 07.
/* 
const str = "YFEMHUbFBBrEZFuxKOelYZFBlesYLLfEGoBYErmaFGBtiMENoTMnENT";
const minuscules = [];

for (let i = 0; i < str.length; i++) {
  if (str[i].toLowerCase() === str[i]) {
    minuscules.push(str[i]);
  }
}

console.log(`Le mot caché est : ${minuscules.join("")}`);

 */
// 08.
/* 
const str = 4589;

console.log(`La nombre ${str} contient ${str.toString().length} chiffres.`);
 */

// 09.
/* 
const nombre = 2;
const qte = 6;
const resultat = [];

for (let i = 1; i <= qte; i++) {
  resultat.push(i * nombre);
}

console.log(resultat);
 */
