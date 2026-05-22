// Exercice 1
/*
let firstName = "Kenny"
let lastName = "Sirichantho"
let fullName = firstName + " " + lastName
console.log(fullName)
*/

//Exercice 2
/*
let name = "Kenny"
let age = 37
let city = "Bruxelles"
let phrase = `Bonjour, je m'appelle ${name}, j'ai ${age} ans et j'habite à ${city}.`
console.log(phrase)
*/

//Exercice 3
/*
let mot = "Bonjour"
console.log(`La longueur de ${mot} est : ${mot.length}.`)
console.log(`La première lettre de ${mot} est : ${mot[0]}.`)
console.log(`La dernière lettre de ${mot} est : ${mot[mot.length - 1]}`)
*/

// Exercice 4
/*
let mixedString = "bOnJoUr Le MoNdE"
console.log(mixedString.toUpperCase())
console.log(mixedString.toLocaleLowerCase())
*/

// Exercice 5
/*
let sentence = "J'apprends le JavaScript chez Bruxelles Formation."
let cherche = "JavaScript"
let mot = sentence.slice(sentence.indexOf(cherche), sentence.indexOf(cherche) + cherche.length)
console.log(`|${mot}|`)
*/


//Exercice 6
/*
let userEmail = " john.doe@email.com "
let cleanedEmail = userEmail.trim()
console.log(`Voici l'adresse mail sans les espaces : |${cleanedEmail}|.`)
*/

//Exercice 7
/*
let originalSentence = "Le chat boit du lait."
let replaced = originalSentence.replace("chat", "chien")
console.log(replaced)
*/

//Exercice 8
/*
let word = "abracadabra"
console.log(word.lastIndexOf("a"))
*/

//Exercice 9
/*
let messyName = " aLexANdeR "
messyName = messyName.trim() //On enlève les espaces au début et à la fin
firstLetter = messyName[0] //On isole la première lettre
firstLetter = firstLetter.toUpperCase() //On met la première lettre en majuscule
let reste = messyName.slice(1, messyName.length) //On isole le rest du mot
reste = reste.toLowerCase() //On met le reste du mot en minuscules

let fixedName = firstLetter + reste //On assemble la première lettre et le reste
console.log(fixedName) //On vérifie
*/

//Exercice 10
/*
let item = "pizza"
let quantity = 2
let price = 15

let phrase_un = "La commande de " + quantity + " " + item + "s coûte " + quantity * price + " dollars."
let phrase_deux = `La commande de ${quantity} pizzas coûte ${quantity * price} dollars.`

console.log(phrase_un)
console.log(phrase_deux)
*/


// EXTRAS 

//Exercice 1
/*
let prenom = prompt(`Veuillez entrer votre prénom :`)
console.log(`Ton prénom : ${prenom.trim()}, est composé de ${prenom.trim().length} caractères.`)
*/

//Exercice 2
/*
let phrase = prompt(`Veuillez entrer une phrase de votre choix :`)
console.log(phrase.trim().toUpperCase())
*/

//Exercice 3
/*
let mot = prompt(`Veuillez entrer un mot :`)
console.log(`La première lettre du mot est : ${mot.trim()[0]}`)
console.log(`La dernière lettre du mot est : ${mot.trim()[mot.trim().length - 1]}`)
*/

//Exercice 4
/*
let mot = "JavaScript"
let phrase = prompt(`Veuillez entrer une phrase :`)
let motTrouve = phrase.toLowerCase().includes(mot.toLowerCase())

console.log(`Voici votre phrase : ` + phrase)
console.log(`Le mot "${mot}" fait partie de votre phrase : ${motTrouve}`)
*/

//Exercice 5
/*
let phraseOk = false
let phrase = ""

while (phraseOk === false) {
    phrase = prompt(`Veuillez entrer une phrase qui contient le mot "problème" :`)
    if (phrase.toLowerCase().includes("problème")) {
        phraseOk = true
    } else {
        alert(`Votre phrase n'est pas conforme.`)
    }
}

console.log(`Voici votre phrase : ` + phrase)
phrase = phrase.toLowerCase().replace("problème", "solution")
console.log(`Nous avons réglé le premier problème pour vous.`)
console.log(phrase[0].toUpperCase() + phrase.slice(1, phrase.length))
*/

//Exercice 6
/*
let nom = prompt(`Veuillez entrer votre nom avec des espaces au début et à la fin :`)

console.log(`Voici votre nom sans les espaces : "${nom.trim()}". Il fait ${nom.length} caractères.`)
console.log(`Il y a ${nom.length} caractères dans ce que vous avez écrit.`)
console.log(`Nous avons donc retiré ${nom.length - nom.trim().length} espaces.`)
*/

//Exercice 7  --  On suppose entre le 3e et le 7e caractères inclus tous les deux
/*
let phraseOk = false
let phrase = ""
while (phraseOk === false) {
    phrase = prompt(`Veuillez entrer une phrase d'au moins 10 caractères :`)
    if (phrase.length >= 10) {
        phraseOk = true
    } else {
        alert(`Votre phrase n'est pas conforme.`)
    }
}

console.log(`Voici la section comprise entre les 3e et 7e caractères (inclus) : "${phrase.slice(3, 8)}"`)
*/

//Exercice 8
/*
let mot = prompt(`Veuillez entrer un mot en minuscules :`)

console.log(`Voici votre mot avec uniquement la première lettre en majuscule : "${mot[0].toUpperCase() + mot.slice(1, mot.length).toLowerCase()}"`)
*/

//Exercice 9
/*
let syll = prompt(`Veuillez entrer une syllabe :`)
let repeated = ""

for (let i = 0; i < 5; i++) {
    repeated += syll
}

console.log(`Voici votre syllabe répétée 5 fois : "${repeated}"`)
*/
