//  ----   Importation des modules ----
const readline = require('readline')
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');
const { isStringObject } = require('util/types');

//  ----   Déclaration de mes variables ----
const myBalls = [{ B: '🔵', R: '🔴', Y: '🟡', G: '🟢', P: '🟣', O: '🟠', W: '⚪' }]; // billes
const botBalls = ['B', 'R', 'Y', 'G', 'P', 'O', 'W'] // Billes mais pour ordi
let ballSelec = []; // Billes sélectionner par le joueur
let cl1 = []; // Bille 1
let cl2 = []; // Bille 2
let cl3 = []; // Bille 3
let cl4 = []; // Bille 4
let cl5 = []; // Bille 5
let co1 = []; // Bille 1
let co2 = []; // Bille 2
let co3 = []; // Bille 3
let co4 = []; // Bille 4
let co5 = []; // Bille 5
let allLettersColors = []; // toute les billes en lettre qui va juste me servir a vérifier si c'est les bonnes billes
let allColors = []; // toute les billes en couleur
const ball1 = botBalls[Math.floor(Math.random() * 4)] // Première bille prise par l'ordinateur
const ball2 = botBalls[Math.floor(Math.random() * 4)] // Deuxième bille prise par l'ordinateur
const ball3 = botBalls[Math.floor(Math.random() * 4)] // Troisième bille prise par l'ordinateur
const ball4 = botBalls[Math.floor(Math.random() * 4)] // Quatrième bille prise par l'ordinateur
const ball5 = botBalls[Math.floor(Math.random() * 4)] // Cinquième bille prise par l'ordinateur
const guessBall = [ball1, ball2, ball3, ball4, ball5] // Billes sélectionner par l'ordinateur
let myAnswer = []


// Pour faire esthétique, à reprendre plus tard
const o = (`
█────█
`)




// On demande dans le terminal quel couleur choisir et on affiche la couleur choisi
//interface.question('Choose a color between B, R, Y, G, P, O, W : ', color1=>{
//    console.log(Ball(myBalls, color1));
//interface.close(); // pour fin du jeux
//});


//  ----  Fonction pour que le joueur puisse selectionner une billes ----

function Ball(array, myProp) { // Boucle pour pouvoir récupérer les billes dans les questions

    // Boucle for pour récupérer tout les valeurs des propriétés dans chaque objet
    for (let index = 0; index < array.length; index++) {
        ballSelec[index] = array[index][myProp]

    }

    // Renvoie le tableau avec les différente valeur
    return ballSelec
}




//  ----  QUESTION POUR RECUPERATION COULEUR ---- JEUX

function game() {


    const interface = readline.createInterface( // Mon interface
        process.stdin, process.stdout
);


    
    const question1 = () => {
        // J'effectue des promesse pour faire mes question et renvoyer les couleurs, quand la lettre est rentrer la promesse est résolu
        return new Promise((resolve, rejects) => {

            // On demande dans le terminal quel couleur choisir et on affiche la couleur choisi
            interface.question('line', color1 => {
                console.log(`Your first color is : ${Ball(myBalls, color1)}`);
                // On rentre la couleur dans une nouvelle variable
                cl1 = color1
                co1 = `${Ball(myBalls, color1)}`
                resolve();

            });
        })
    }

    const question2 = () => {
        return new Promise((resolve, rejects) => {
            interface.question('Choose a second color between B, R, Y, G, P, O, W : ', color2 => {
                console.log(`Your second color is : ${Ball(myBalls, color2)}`);
                cl2 = color2
                co2 = `${Ball(myBalls, color2)}`
                resolve();

            });
        })
    }

    const question3 = () => {
        return new Promise((resolve, rejects) => {
            interface.question('Choose a third color between B, R, Y, G, P, O, W : ', color3 => {
                console.log(`Your third color is : ${Ball(myBalls, color3)}`);
                resolve();
                cl3 = color3
                co3 = `${Ball(myBalls, color3)}`

            });
        })
    }

    const question4 = () => {
        return new Promise((resolve, rejects) => {
            interface.question('Choose a fourth color between B, R, Y, G, P, O, W : ', color4 => {
                console.log(`Your fourth color is : ${Ball(myBalls, color4)}`);
                cl4 = color4
                co4 = `${Ball(myBalls, color4)}`
                resolve();

            });
        })
    }

    const question5 = () => {
        return new Promise((resolve, rejects) => {
            interface.question('Choose a last color between B, R, Y, G, P, O, W : ', color5 => {
                console.log(`Your last color is : ${Ball(myBalls, color5)}`);
                cl5 = color5
                co5 = `${Ball(myBalls, color5)}`
                console.log('')
                allLettersColors = [cl1, cl2, cl3, cl4, cl5];
                allColors = [co1, co2, co3, co4, co5];
                console.log(`All your colors are :` + allColors);
                resolve();

            });
        })
    }

    for (let i = 0; i < allColors.length; i++) {
        console.log('do i enter in the loop ?')
        if (allLettersColors[i] === guessBall[i]) {
            console.log('One good color and good position');
        } else if (allLettersColors[i] === guessBall) {
            console.log('One good color');
        } else myAnswer += `No goods`
    }

    if (allLettersColors === guessBall) {
        console.log('Welldone you WON 🎊🎊🎉🎉')
        interface.close(); // fin de l'interface donc du jeu
    }

    // Ici je fait une variable qui va me renvoyer les questions et les actions les unes après les autres
    const myQuestion = async () => {
        await question1();
        await question2();
        await question3();
        await question4();
        await question5();
        console.log(myAnswer)
        console.log(guessBall); // ici temporairement
        //    interface.close(); // fin de l'interface donc du jeu
        return allLettersColors !== guessBall
    }

    const gameNotOver = myQuestion()
    return gameNotOver

}

let gameOn = true;

game()



//for (let j = 0; j < 5; j++) {
//    game()
//
/**
if (allLettersColors !== guessBall) {
    game()
}
*/
// ✔️= bonne couleur et pause ✖️= rien de bon 〰️= bonne couleur mais pas pause

