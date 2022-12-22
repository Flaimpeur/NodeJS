// Idéer jeux : masterMind (le jeux ou il y a 5 billes de couleur aléatoire et faut les deviner en 4 essaie)

// Importation des modules
const readline = require('readline')
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');

// Déclaration de mes variables
const myBalls = [{B : '🔵', R : '🔴', Y : '🟡', G : '🟢', P : '🟣', O : '🟠', W : '⚪'}]; // billes
const botBalls = ['B','R','Y','G','P','O','W'] // Billes mais pour ordi
let ballSelec = []; // Billes sélectionner par le joueur
let c1 = []; // Bille 1
let c2 = []; // Bille 2
let c3 = []; // Bille 3
let c4 = []; // Bille 4
let c5 = []; // Bille 5
let allcolors = []; // toute les billes
const interface = readline.createInterface( // Mon interface
    process.stdin, process.stdout
);
let ball1 = botBalls[Math.floor(Math.random()*4)] // Première bille prise par l'ordinateur
let ball2 = botBalls[Math.floor(Math.random()*4)] // Deuxième bille prise par l'ordinateur
let ball3 = botBalls[Math.floor(Math.random()*4)] // Troisième bille prise par l'ordinateur
let ball4 = botBalls[Math.floor(Math.random()*4)] // Quatrième bille prise par l'ordinateur
let ball5 = botBalls[Math.floor(Math.random()*4)] // Cinquième bille prise par l'ordinateur
let guessBall = [ball1, ball2, ball3, ball4, ball5] // Billes sélectionner par l'ordinateur


// Pour faire esthétique, à reprendre plus tard
const o = (`
█────█
`)




// On demande dans le terminal quel couleur choisir et on affiche la couleur choisi
//interface.question('Choose a color between B, R, Y, G, P, O, W : ', color1=>{
//    console.log(Ball(myBalls, color1));
    //interface.close(); // pour fin du jeux
//});




// QUESTION POUR RECUPERATION COULEUR

function Ball(array, myProp){ // Boucle pour pouvoir récupérer les billes dans les questions

    // Boucle for pour récupérer tout les valeurs des propriétés dans chaque objet
    for (let index = 0; index < array.length; index++) {
        ballSelec[index] = array[index][myProp]

    }

    // Renvoie le tableau avec les différente valeur
    return ballSelec
}

const question1 = () =>{
    return new Promise((resolve, rejects)=>{

        // On demande dans le terminal quel couleur choisir et on affiche la couleur choisi
        interface.question('Choose a first color between B, R, Y, G, P, O, W : ', color1=>{
            console.log(`Your first color is : ${Ball(myBalls, color1)}`);

            // On rentre la couleur dans une nouvelle variable
            c1 = `${Ball(myBalls, color1)}`
            resolve();
            //interface.close(); // pour fin du jeux
        });
    })
}

const question2 = () =>{
    return new Promise((resolve, rejects)=>{
        interface.question('Choose a second color between B, R, Y, G, P, O, W : ', color2=>{
            console.log(`Your second color is : ${Ball(myBalls, color2)}`);
            c2 = `${Ball(myBalls, color2)}`
            resolve();
            //interface.close(); // pour fin du jeux
        });
    })
}

const question3 = () =>{
    return new Promise((resolve, rejects)=>{
        interface.question('Choose a third color between B, R, Y, G, P, O, W : ', color3=>{
            console.log(`Your third color is : ${Ball(myBalls, color3)}`);
            resolve();
            c3 = `${Ball(myBalls, color3)}`
            //interface.close(); // pour fin du jeux
        });
    })
}

const question4 = () =>{
    return new Promise((resolve, rejects)=>{
        interface.question('Choose a fourth color between B, R, Y, G, P, O, W : ', color4=>{
            console.log(`Your fourth color is : ${Ball(myBalls, color4)}`);
            c4 = `${Ball(myBalls, color4)}`
            resolve();
            //interface.close(); // pour fin du jeux
        });
    })
}

const question5 = () =>{
    return new Promise((resolve, rejects)=>{
        interface.question('Choose a last color between B, R, Y, G, P, O, W : ', color5=>{
            console.log(`Your last color is : ${Ball(myBalls, color5)}`);
            c5 = `${Ball(myBalls, color5)}`
            resolve();
            console.log('')
            allcolors = [c1, c2, c3, c4, c5]
            console.log(`All your colors are :` + allcolors)
            //interface.close(); // pour fin du jeux
        });
    })
}

// Ici je fait une variable qui va me renvoyer les questions et les actions les unes après les autres
const myQuestion = async() =>{
    await question1();
    await question2();
    await question3();
    await question4();
    await question5();
    await console.log(guessBall); // ici temporairement
    interface.close(); // fin de l'interface donc du jeu
}

myQuestion()
