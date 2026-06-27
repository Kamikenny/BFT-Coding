// 01.
/* 
const findBrokenKeys = (str1, str2) => {
  let brokenKeys = [];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (!brokenKeys.includes(str1[i])) {
        brokenKeys.push(str1[i]);
      }
    }
  }
  return brokenKeys;
};

console.log(findBrokenKeys("hello", "hallo"));
console.log(findBrokenKeys("hello", "hemmo"));
console.log(findBrokenKeys("hello", "hammi"));
 */

// 02.
/* 
const str1 = "this is a secret note to you from a secret admirer"
const str2 = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"

const ransomNote = (noteText, magazineText) => {
  if (!noteText) {
    return true
  }
  const noteArray = noteText.split(" ")
  const magazineArray = magazineText.split(" ")

  let index = magazineArray.indexOf(noteArray[0])
  if (index > -1) {
    noteArray.shift()
    magazineArray.splice(index, 1)

    return ransomNote(noteArray.join(" "), magazineArray.join(" "))
  } else {
    return false
  }
}

console.log(ransomNote(str1, str2)) // false
console.log(ransomNote("a b c d e", "a b c d e")) // true
console.log(ransomNote("a b c d e", "b c a e d")) // true
 */

// 02.bis "sans récursion"
/* 
const str1 = "this is a secret note to you from a secret admirer"
const str2 = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"

const ransomNote = (noteText, magazineText) => {
  const noteArray = noteText.split(" ")
  const magazineArray = magazineText.split(" ")

  while (magazineArray.includes(noteArray[0])) {
    let index = magazineArray.indexOf(noteArray[0])
    noteArray.shift()
    magazineArray.splice(index, 1)
  }
  return noteArray.length < 1
}

console.log(ransomNote(str1, str2)) // false
console.log(ransomNote("a b c d e", "a b c d e")) // true
console.log(ransomNote("a b c d e", "b c a e d")) // true
 */

// 03.
/* 
const detectWord = (str) => {
  let word = ""

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      word += str[i]
    }
  }

  return word
}

console.log(detectWord("UcUNFYGaFYFYGtNUH")) // cat
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr")) // burglar
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")) // embezzlement
 */