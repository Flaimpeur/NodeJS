// Idéer jeux : masterMind (le jeux ou il y a 5 billes de couleur aléatoire et faut les deviner en 4 essaie)

// Importation du module readline et fs
const readline = require('readline')
const fs = require('fs')

// Pour faire esthétique, à reprendre plus tard
const x = (`
█────█
`)

const myBalls = [{B : '🔵'},{R : '🔴'},{Y : '🟡'}, {G : '🟢'},{P : '🟣'},{O : '🟠'}, {W : '⚪'}];
const interface = readline.createInterface(
    process.stdin, process.stdout);

interface.question('Choose a color between 0 and 6 : ', index =>{
    console.log(myBalls[index]);
    interface.close(); // pour fin du jeux
});

/**
let objArray= []
function Obj(array, myProp){

    // Boucle for pour récupérer tout les valeurs des propriétés dans chaque objet
    for (let index = 0; index < array.length; index++) {
        objArray[index] = array[index][myProp]

    }

    // Renvoie le tableau avec les différente valeur
    return objArray
}

console.log(Obj(myBalls, 'B'));*/