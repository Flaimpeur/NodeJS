// Idéer jeux : masterMind (le jeux ou il y a 5 billes de couleur aléatoire et faut les deviner en 4 essaie)

// Importation des modules
const readline = require('readline')
const fs = require('fs')

// Déclaration de mes variables
const myBalls = [{B : '🔵', R : '🔴', Y : '🟡', G : '🟢', P : '🟣', O : '🟠', W : '⚪'}]; // billes
let ballSelec = [] // Billes sélectionner par le joueur
const interface = readline.createInterface( // Mon interface
    process.stdin, process.stdout
); 


// Pour faire esthétique, à reprendre plus tard
const x = (`
█────█
`)


function Ball(array, myProp){

    // Boucle for pour récupérer tout les valeurs des propriétés dans chaque objet
    for (let index = 0; index < array.length; index++) {
        ballSelec[index] = array[index][myProp]

    }

    // Renvoie le tableau avec les différente valeur
    return ballSelec
}

// On demande dans le terminal quel couleur choisir et on affiche la couleur choisi
interface.question('Choose a color between B, R, Y, G, P, O, W : ', color =>{
    console.log(Ball(myBalls, color));
    interface.close(); // pour fin du jeux
});