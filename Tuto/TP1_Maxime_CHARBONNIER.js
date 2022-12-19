// Exercice 1

function sum(numOne, numTwo) {
    return numOne + numTwo
}

console.log(sum(2,8))

let arrayNumbers = [556, 5, 78, 12, 1546, 57, 558, 15478, 15472]
let myHighestNumber = 0



// Exercice 2
function highestNumber(numbersArray) {
    for (let index = 0; index < numbersArray.length; index++) {
        const myNumber = numbersArray [index];
        if (myNumber > myHighestNumber) {
            myHighestNumber = myNumber
        }
    }
    return myHighestNumber;
}

console.log(highestNumber(arrayNumbers));


// Exercice 3
let maString = "bonjour, holla, comment allez vous, moi je vais bien"

function noVowel(text) {
    text = text.toLocaleUpperCase('en-US'); // Ici je converti tout mon texte en majuscule pour ne pas oublier certaine lettre
    text = text.split("A").join("").split("E").join("").split("I").join("").split("O").join("").split("U").join("").split("Y").join(""); // On supprime toute les voyelles en les remplacent par rien
    return text.toLowerCase('en-US'); // Ici je revoi mon texte sans les voyelle et en minuscule a nouveau
}

console.log(noVowel(maString))

// Exercice 4

