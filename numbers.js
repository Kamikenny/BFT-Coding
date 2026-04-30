//Exercice 1
/*
let x = parseFloat(prompt(`Veuillez entrer un nombre :`))
let y = parseFloat(prompt(`Veuillez un second nombre :`))

console.log(`${x} + ${y} = ${x + y}`)
console.log(`${x} - ${y} = ${x - y}`)
console.log(`${x} * ${y} = ${x * y}`)
console.log(`${x} / ${y} = ${x / y}`)
*/

//Exercice 2
/*
let x = parseInt(prompt(`Veuillez entrer un nombre entier (dividende) :`))
let y = parseInt(prompt(`Veuillez un second nombre entier (diviseur):`))

console.log(`Le reste de la division entre ${x} par ${y} est : ${x % y}`)
*/

//Exercice 3
/*
let priceString = "199.99"

console.log(parseFloat(priceString) + 50.50)
*/

//Exercice 4
/*
let rayon = 7
let aire = Math.PI * (rayon ** 2)

console.log(aire.toFixed(2))
*/

//Exercice 5
/*
let floatNumber = 42.583

console.log(`1 : ` + Math.round(floatNumber))
console.log(`2 : ` + Math.floor(floatNumber))
console.log(`3 : ` + Math.ceil(floatNumber))
*/

//Exercice 6
/* 
// console.log(Math.ceil(Math.random() * 6)) //INCORRECT : Infime probabilité d'obtenir 0
console.log(Math.floor(Math.random() * (6 - 1) + 1) + 1)
 */

//Exercice 7
/*
let x = parseInt(prompt(`Veuillez entrer un nombre entier (dividende) :`))
let y = parseInt(prompt(`Veuillez un second nombre entier (diviseur):`))

console.log(`${x}^${y} = ` + x ** y)
*/

//Exercice 8
/*
let score = 100

console.log(`Votre score final est de ${score.toString()} points.`)
*/

//Exercice 9
/*
let min = 0
let max = 0

while (min >= max) {
    min = parseFloat(prompt(`Veuillez entrer un nombre minimum :`))
    max = parseFloat(prompt(`Veuillez entrer un nombre maximum :`))
    if (min >= max) {
        alert(`Le nombre maximum DOIT être supérieur au nombre minimum.`)
    }
}

let random = Math.floor(Math.random() * (max - min + 1)) + min
console.log(`Voici un nombre aléatoire compris entre vos nombres : ${random}`)
*/

//Exercice 10
/* 
let price = parseFloat(prompt(`Veuillez entrer un prix hors taxes pour un produit :`))
let tax = (price / 100) * 21
let fullPrice = price + tax
console.log(`La TVA (21%) pour ce produit vaut : ${tax.toFixed(2)}`)
console.log(`Le prix total est donc : ${fullPrice.toFixed(2)}`)
 */

//  ---- EXTRAS ----

//Exercice 1
/* 
let mot = prompt(`Veuillez entrer un mot :`)
let repetitions = parseInt(prompt(`Combien de fois voulez vous le répéter ? (Entrez un nombre) :`))
let repeated = mot.repeat(repetitions)

console.log(`Voici votre mot répété ${repetitions} fois : "${repeated}"`)
*/

//Exercice 2
/*
let phrase = prompt(`Veuillez entrer une phrase :`)
let half = phrase.slice(0, Math.floor(phrase.length / 2))
console.log(`Voici la première moitié de votre phrase : "${half}"`)
*/

//Exercice 3
/*
let pass = prompt(`Veuillez entrer un mot de passe :`)
let num = parseInt(prompt(`Veuillez entrer un nombre :`))
let hidden = ""
let end = pass.slice(pass.length - num, pass.length)

for (i = 0; i < pass.slice(0, pass.length - num).length; i++) {
    hidden += "*"
}

console.log(`Voici votre mot de passe avec seulement les ${num} derniers caractères affichés : "${hidden + end}"`)
*/

//Exercice 4
/* 
let weight = Number(prompt(`Veuillez entrer votre poids en kilogrammes :`))
let height = Number(prompt(`Veuillez entrer votre taille en mètres :`))

console.log(`Votre Indice de Masse Corporelle est : ` + (weight /(height ** 2)).toFixed(1))
 */

//Exercice 5
/* 
let prompted = prompt(`Veuillez entrer un prix, suivi par la devise (ex: 24.99€) :`)
let price = Number(prompted.slice(0, prompt.length - 1))
let newPrice = price - (price * 15) / 100

console.log(`Grâce à votre réduction, votre prix est descendu à : ` + newPrice + prompted[prompted.length - 1])
 */

//Exercice 6

let mot = prompt(`Veuillez entrer un mot :`)

console.log(`Voici un caractère aléatoire issu de votre mot :` + mot[Math.floor(Math.random * ((mot.length -1) - 0 + 1) + 0 )])