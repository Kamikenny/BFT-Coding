// Terminal de cryptage

let phrase = prompt("Veuillez entrer une phrase d'au moins 10 caractères :");

if (phrase.length < 10 || phrase.indexOf(" ") === -1) {
  alert("Phrase non valide.");
} else {
  let crypted =
    phrase
      .split(" ")
      .toReversed()
      .join("")
      .replace("a", "4")
      .replace("e", "3") +
    Math.floor(Math.random() * (9 - 0 + 1) + 0) +
    Math.floor(Math.random() * (9 - 0 + 1) + 0) +
    Math.floor(Math.random() * (9 - 0 + 1) + 0) +
    Math.floor(Math.random() * (9 - 0 + 1) + 0);

  alert(crypted);
}
