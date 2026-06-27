// 1. Lancer des dés
/* 
function rollDice(faces, times) {
  if (isNaN(faces % 2) || isNaN(times % 2)) {
    return "Action impossible";
  }

  for (let i = 1; i <= times; i++) {
    console.log(`Die ${i}: ${Math.floor(Math.random() * (faces - 1) + 1)}`);
  }
}

rollDice(6, 5);
 */

// 2. Répéter une chaîne de caractères
/* 
function repeat(str, times) {
  if (isNaN(times % 2)) {
    console.log("Action impossible");
    return;
  }

  console.log(str.repeat(times));
}

repeat("ha", 3);
repeat("ha", "gh");
 */

// 3. Présentation par prénom et initiale du nom
/* 
function greet(firstName, lastName) {
  console.log(
    `This is ${firstName[0].toUpperCase() + firstName.slice(1, firstName.length).toLowerCase()} ${lastName[0].toUpperCase()}.`,
  );
}

greet("Kenny", "Sirichanho");
greet("kenny", "sirichantho");
greet("KENNY", "sIRICHANTHO");
 */

// 4. Addition de deux nombres
/* 
function sum(x, y) {
  return x + y;
}

const result = sum(5, 3);
console.log(result);
 */

// 5. Exercice mental
/*
Hello
World
4
*/

// 6. Fonction pour déterminer le temps vestimentaire
/* 
function isShortWeather(temperature) {
  if (isNaN(temperature % 2)) {
    console.log("Action impossible");
    return undefined;
  }
  return temp >= 24
}

console.log(isShortWeather(13));
console.log(isShortWeather(27));
console.log(isShortWeather(-7));
 */

// 7. Dernier élément d'un tableau
/* 
function getLastElement(array) {
  if (!array.length) {
    return null;
  } else {
    return array[array.length - 1];
  }
}

console.log(getLastElement([3, 5, 7]));
console.log(getLastElement([1]));
console.log(getLastElement([]));
 */

// 8. Capitaliser une chaîne
/* 
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize("eggplant"));
console.log(capitalize("pamplemousse"));
console.log(capitalize("squid"));
 */

// 9. Somme des éléments d'un tableau
/* 
function sumArray(array) {
  let sum = 0;

  array.forEach((el) => {
    sum += el;
  });
  return sum;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([2, 2, 2, 2]));
console.log(sumArray([50, 50, 1]));
 */

// 10. Jour de la semaine
/* 
function returnDay(number) {
  if (number < 1 || number > 7 || isNaN(number % 2)) {
    return null;
  } else {
    switch (number) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
    }
  }
}

console.log(returnDay(1));
console.log(returnDay(7));
console.log(returnDay(4));
console.log(returnDay(0));
 */
