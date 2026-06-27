// 01.
/* 
const prixInitiaux =  [10, 25, 47, 99, 150]

const calculInflation = (element) => {
    return (element *= 1.10).toFixed(2)
}

console.log(prixInitiaux.map(calculInflation))
 */

// 02.
/* 
const utilisateurs = [
{ nom: "Alice", age: 22 },
{ nom: "Bob", age: 16 },
{ nom: "Charlie", age: 17 },
{ nom: "Diane", age: 35 }
];

const utilisateursFiltres = utilisateurs.filter((element) => {return element.age >= 18})

console.log(utilisateursFiltres)
 */

// 03.
/* 
const inventaire = [
{ produit: "Ordinateur", quantite: 5 },
{ produit: "Clavier", quantite: 0 },
{ produit: "Souris", quantite: 12 }
];

const produitManquant = inventaire.some((element) => {return element.quantite <= 0})

console.log(produitManquant)
 */

// 04.
/* 
const participants = [
{ nom: "Jean", email: "jean@mail.com" },
{ nom: "Marc", email: "marc@mail.com" },
{ nom: "Sara", email: "" }
];

const emailVide = participants.some((element) => {return !(element.email.trim())}) // true si un email est vide

console.log(emailVide) // true
 */

// 05.
/* 
const scores = [150, 420, 90, 300];
let totalScore = 0

scores.forEach((element) => {totalScore += element})

console.log(totalScore)
 */

// 06.
/* 
const bibliothèque = [
{ titre: "Dune", genre: "Science-Fiction" },
{ titre: "Le Hobbit", genre: "Fantasy" },
{ titre: "Fondation", genre: "Science-Fiction" }
];

const catSciFi = bibliothèque.filter((element) => {return element.genre === "Science-Fiction"})

console.log(catSciFi)
 */

// 07.
/* 
const infrastructure = [
{ id: "Serveur 1", services: ["opérationnel", "défaillant"] },
{ id: "Serveur 2", services: ["défaillant", "défaillant"] },
{ id: "Serveur 3", services: ["opérationnel", "opérationnel"] }
];

const tousDefaillants = infrastructure.every((element) => {return element.services.includes("défaillant")})

console.log(tousDefaillants) // false
 */

// 08.
/* 
const mots = ["pomme", "banane", "orange"];

const affichageMajuscules = (element, index) => {
    element = element.toUpperCase()
    console.log(`${index + 1}. ${element}`)
}

mots.forEach(affichageMajuscules)
 */

// 09.
/* 
const projets = [
{ nom: "Alpha", actif: true, budget: 60000 },
{ nom: "Beta", actif: false, budget: 90000 },
{ nom: "Gamma", actif: true, budget: 30000 }
];

const tri = (element) => {
    return element.actif && element.budget > 50000
}

const projetsChersEtActifs = projets.filter(tri)

console.log(projetsChersEtActifs)
 */

// 10.
/* 
const identifiants = [102, 205, 102, 308, 205, 411];

const setOfIds = []

const tri = (element) => {
    if (!(setOfIds.includes(element))) {
        setOfIds.push(element)
    }
}

identifiants.forEach(tri)

console.log(setOfIds)
 */