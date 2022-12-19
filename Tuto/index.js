console.log("Hello World");
//ça c'est un commentaire sur une ligne
/*

Et ça c'est sur plusieurs ligne

*/

// On dispose de trois mots cles pour declarer des variables en JS

// var, let et const

var test = "Bonjour"; // pas utilisable cette semaine

let test2 = "le"; // l'operateur = est un opeurateur

test2 = "les ";

const test3 = " Monde!";


// Numbers
const age = 23;

//variable
let x;
//text (string)
const aRandomString = "some Text";
//Operations
let addition = 4 + 4;
//booleans
let myBoolean = true;

const PI = 3.14;

//Objects
let name = { fristName: "Paul", lastName: "MOULEROT" };

console.log();

// Arrays
let myArrays1 = ["Banana ", "Test ", " Application"];




// FONCTION :

// Ceci est une fonction
// number est un parametre (ou un argument) de ma fonction sum
// les accolades deffinisse le corps de la fonction, c'est la que la logique de la fonction est stockée
//function square(number) { 
//    return number * number ;
//}

//ceci est la meme fonction
//const square = (number) => {
//    return number * number ;
//}

//ceci est la meme fonction
//const square = number => {
//    return number * number ;
//}

//ceci est la meme fonction
//const square = number => number * number ;

//const number = square(2);
//console.log(number)


// Ceci est un tableau
let myArray = [45699,4585, 65186748654, 864354, 4883 ,5456435, 2158];

// l'index est la position d'un element dans le tableau
// le premier index est l'index 0
//console.log(myArray.length);


//boucle for
//for (let index = 0; index < myArray.length; index++) {
//    const arrayContentAtIndex = myArray [index];
//    console.log(arrayContentAtIndex);
//}

//Ecrivez une fonction qui prend un tableau de nombre en parametre et qui retourne le plus grand nombre du tableau

let arrayNumbers = [556, 5, 78, 12, 1546, 57, 558, 15478, 15472]
let myHighestNumber = 0

/** Mon code
 * 
 * @param {*} numbersArray : an array of number
 */
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

/**
 * Code du prof
 * 
 * @param {*} numbers : an array of number
 */
function getMaxNumber(numbers) {


    let max = numbers[0]; // on declare une variable max on l'initialise avec numbers[0]
    
    // on parcourt le tableau numbers avec un boucle for
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max & max;
}

console.log(getMaxNumber(myArray))

//autre code pour même utilité
function largestNumber(arrayNumbers) {
    return Math.max(...arrayNumbers)
}
console.log(largestNumber(arrayNumbers))