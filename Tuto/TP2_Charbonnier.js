// Exercice 1

// déclaration de variable 
const { count } = require('console');
const fs = require('fs'); // fs est pour file system se qui est obligatoire pour node js (et va être utiliser a chaque fois je n'aurais pas besoin de le reécrire)

const myFile = fs.readFileSync('Fichier1.txt', 'utf8', (err, data)=> {
    if (err) {
        console.log(err);
        return
    }
    console.log(data);
}); // utilisation de readFileSync qui va récupérer le dossier et le mettre dans la console

console.log(myFile);

/**
 * Version prof
 */

/**
 * fs.readFile('Fichier1.txt', 'utf-8',(err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})
*/

// Exercice 2

// Lecture du fichier avant modification
const oldtext = fs.readFileSync('Fichier2.txt', 'utf8', (err, data)=> {
    if (err) {
        console.log(err);
        return
    }
    console.log(data);
});

// On re écrit le text a l'intérieur du fichier grace a la fonction writeFileSync fourni avec le fs
const d = fs.writeFileSync('Fichier2.txt','Bonjour à vous, vous venez de changer mon texte et ça ces cool');

// Lecture du fichier après modification 
const newtext = fs.readFileSync('Fichier2.txt', 'utf8', (err, data)=> {
    if (err) {
        console.log(err);
        return
    }
    console.log(data);
});


console.log("Old text : " + oldtext);
console.log("New text : " + newtext);

// Exercice 4

// Utilisation de la fonction readdirSync pour lister tout les fichier d'un répertoire
const readDir = fs.readdirSync('C:/Users/Flaimpeur/Documents/Cours Isitech/RPI/B2/NodeJS/Test/',(anError, anData)=>{ // Premier paramètre le chemin du répertoir, deuxième paramètre le test si il y a une erreur
    if (anError) { // condition if ou l'on rentre dedans que quand il y a une erreur
        console.log(anError);
        return
    }
    // affichage des fichier dans le repertoire
    console.log(anData);
})

console.log(readDir);


// Exercice 5

// création du nouveau fichier
fs.openSync('myNewDir', 'a');

// écriture dedans
const write = fs.writeFileSync('myNewDir','Bonjour je suis nouveau et tu a écrit quelque chose');

// Exercice 6

// importation de os
const os = require('os');

// affichage du répertoire personnel de l'utilisateur actuel
console.log(os.homedir());

// Exercice 8

// importation de path
const path = require('path');

// affichage si le chemin est absolu ou non, réponse en booléan
console.log(path.isAbsolute('C:/Users/Flaimpeur/Documents/Cours Isitech/RPI/B2/NodeJS/Test/'));


// Exercice 9

// importation de querystring, url. Et déclaration de anUrl
const querystring = require('querystring');
const url = require('url');
const anUrl = 'https://test.fr/auth/callback?code=hi&state=well';

// Analyse de mon url
let urlParams = querystring.parse(url.parse(anUrl).query);

console.log(urlParams);

// Exercice 10

// importation de events
const events = require('events');

// Initialisation de mes evennement
const myevents = new events();

// mise en place de mon evennement
myevents.on('myEvent', (msg) =>{
    console.log(msg);
});

// Enclenchement de l'evennement
myevents.emit('myEvent', 'My first event');