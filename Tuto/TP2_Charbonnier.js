// Exercice 1

// déclaration de variable 
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

// On re écrit le text a l'intérieur du fichier grace a la fonction writeFileSync fourni avec le fs

const oldtext = fs.readFileSync('Fichier2.txt', 'utf8', (err, data)=> {
    if (err) {
        console.log(err);
        return
    }
    console.log(data);
});

const d = fs.writeFileSync('Fichier2.txt','Bonjour à vous, vous venez de changer mon texte et ça ces cool');


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

const readDir = fs.readdirSync('C:/Users/Flaimpeur/Documents/Cours Isitech/RPI/B2/NodeJS/Test/',(anError, anData)=>{
    if (anError) {
        console.log(anError);
        return
    }
    console.log(anData);
})

console.log(readDir);


// Exercice 5

fs.openSync('myNewDir', 'a');

// Exercice 6

const os = require('os');

console.log(os.homedir());

// Exercice 7

