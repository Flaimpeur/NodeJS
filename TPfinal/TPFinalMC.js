// Idéer jeux : masterMind (le jeux ou il y a 5 billes de couleur aléatoire et faut les deviner en 4 essaie)

// Importation des modules
const readline = require('readline')
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');

// Déclaration de mes variables
const myBalls = [{B : '🔵', R : '🔴', Y : '🟡', G : '🟢', P : '🟣', O : '🟠', W : '⚪'}]; // billes
let guessBall = ['B','W','P','R','P']; // Billes sélectionner par l'ordinateur
let ballSelec = [] // Billes sélectionner par le joueur
let test1 = []
let test2 = []
const interface = readline.createInterface( // Mon interface
    process.stdin, process.stdout
); 

/**
 * randint = fonction pour sélectionner un élément aléatoire
 */
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
//interface.question('Choose a color between B, R, Y, G, P, O, W : ', color1=>{
//    console.log(Ball(myBalls, color1));
    //interface.close(); // pour fin du jeux
//});

const question1 = () =>{
    return new Promise((resolve, rejects)=>{
        interface.question('Choose a first color between B, R, Y, G, P, O, W : ', color1=>{
            console.log(`Your first color is : ${Ball(myBalls, color1)}`);
            test2 = `${Ball(myBalls, color1)}`
            resolve();
            //interface.close(); // pour fin du jeux
        });
    })
}

const question2 = () =>{
    return new Promise((resolve, rejects)=>{
        interface.question('Choose a second color between B, R, Y, G, P, O, W : ', color2=>{
            console.log(`Your second color is : ${Ball(myBalls, color2)}`);
            test2 = test2 + `${Ball(myBalls, color2)}`
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
            test2 = test2 + `${Ball(myBalls, color3)}`
            //interface.close(); // pour fin du jeux
        });
    })
}

const question4 = () =>{
    return new Promise((resolve, rejects)=>{
        interface.question('Choose a fourth color between B, R, Y, G, P, O, W : ', color4=>{
            console.log(`Your fourth color is : ${Ball(myBalls, color4)}`);
            test2 = test2 + `${Ball(myBalls, color4)}`
            resolve();
            //interface.close(); // pour fin du jeux
        });
    })
}

const question5 = () =>{
    return new Promise((resolve, rejects)=>{
        interface.question('Choose a last color between B, R, Y, G, P, O, W : ', color5=>{
            console.log(`Your last color is : ${Ball(myBalls, color5)}`);
            test2 = test2 + `${Ball(myBalls, color5)}`
            resolve();
            console.log(test2)
            //interface.close(); // pour fin du jeux
        });
    })
}

const myQuestion = async() =>{
    await question1();
    await question2();
    await question3();
    await question4();
    await question5();
    interface.close();
}

myQuestion()
