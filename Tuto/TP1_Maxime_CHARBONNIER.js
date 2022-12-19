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

let textArray = ["je", "suis", "un", "test", "bonjour", "alo", "comment", "sa", "jy", "vais"]

function sort(textArray) {
    return textArray.sort(); // je renvoie dans l'ordre alphabetique avec "sort", qui sert à trier dans l'ordre alphabetique
}

console.log(sort(textArray))

// Exercice 5

myNum = 26

function NumberToLetter(nombre, U=null, D=null) {

    // On déclare la variable NumToLet en tant que dictionnaire
    const NumToLet = {0: "zéro", 1: "un", 2: "deux", 3: "trois", 4: "quatre", 5: "cinq",6: "six",7: "sept",8: "huit",9: "neuf",10: "dix",11: "onze",12: "douze",
13: "treize", 14: "quatorze", 15: "quinze", 16: "seize", 17: "dix-sept", 18: "dix-huit", 19: "dix-neuf", 20: "vingt", 30: "trente", 40: "quarante", 50: "cinquante", 60: "soixante", 70: "soixante-dix", 80: "quatre-vingt", 90: "quatre-vingt-dix"};

    // Déclaration de différente variable
    let x, theQuotient, rest, num;
    let numberToLetter = '';

    // Utilisation de la fonction parseFloat qui permet de transformer une chaîne de caractère en un nombre
    num = parseFloat(nombre.toString().replace(/ /gi, ""));

    if(Math.ceil(num) != num){
        num = nombre.toString().split('.');
        //return NumberToLetter(num[0]) + " virgule " + NumberToLetter(num[1]);
        return NumberToLetter(num[0]) + (U ? " " + U + " et " : " virgule ") + NumberToLetter(num[1]) + (D ? " " + D : "");
    }

    x = num.toString().length;
    switch (x) {
        case 1:
            numberToLetter = NumToLet[num];
            break;
        case 2:
            if (num > 19) {
                theQuotient = Math.floor(num / 10);
                rest = num % 10;
                if (num < 71 || (num > 79 && num < 91)) {
                    if (rest == 0) numberToLetter = NumToLet[theQuotient * 10];
                    if (rest == 1) numberToLetter = NumToLet[theQuotient * 10] + "-et-" + NumToLet[rest];
                    if (rest > 1) numberToLetter = NumToLet[theQuotient * 10] + "-" + NumToLet[rest];
                } else numberToLetter = NumToLet[(theQuotient - 1) * 10] + "-" + NumToLet[10 + rest];
            } else numberToLetter = NumToLet[num];
            break;
    }
    if (numberToLetter.substr(numberToLetter.length - "quatre-vingt".length, "quatre-vingt".length) == "quatre-vingt") numberToLetter = numberToLetter + "s";

    return numberToLetter;

}

console.log(NumberToLetter(myNum));

// Exercice 6



// Exercice 7

decreasingArray = [5,0,7,8,12,90,8852,3,70];

function decreasing(array) {
    const Desc = (a, b) => b - a; // déclaration de la variable Desc pour faire le décroissant
    array.sort(Desc); // On trie en décroissant
    return array // On renvoie dans l'ordre décroissant
}


console.log(decreasing(decreasingArray));

// Exercice 8

let aString = "bonjour, holla, comment allez vous, moi je vais bien"

function upperVowel(text) {
    text = text.split("a").join("A").split("e").join("E").split("i").join("I").split("o").join("O").split("u").join("U").split("y").join("Y"); // On replace toute les voyelles minuscule en voyelle majuscule
    return text; // Ici je revoi mon texte avec les voyelles en majuscule

}

console.log(upperVowel(aString))

// Exercice 9

numVowel = "bonsoir Tout le monde comment allez vous moi je vais super bien";

function vowelNumber(numVowel) {
    // Déclaration des variables
    let vowelNum = 0;
    let theVowel = ['a', 'e', 'i', 'o', 'u', 'y'];
    // Boucle for pour compter toute les lettre dans le texte
    for (let letters of numVowel) {
        if (theVowel.includes(letters.toLowerCase())) { // Condition pour vérifier si la lettre du texte est compris dans le tableau des voyelles
            vowelNum ++;
        }
    }
    return vowelNum; // On renvoie le numéro de voyelle comprise dans le texte
}
console.log(vowelNumber(numVowel))

// Exercice 10

let consonantArray ="bonjour, holla, comment allez vous, moi je vais bien"

function upperConsonant(text) {
    text = text.split("b").join("B").split("c").join("C").split("d").join("D").split("f").join("F").split("g").join("G").split("h").join("H").split("j").join("J").split("k").join("K").split("l").join("L").split("m").join("M").split("n").join("N").split("p").join("P").split("q").join("Q").split("r").join("R").split("s").join("S").split("t").join("T").split("v").join("V").split("w").join("W").split("x").join("X").split("z").join("Z"); // On replace toute les consonnes minuscule en consonnes majuscule
    return text; // Ici je revoi mon texte avec les consonnes en majuscule

}

console.log(upperConsonant(consonantArray))