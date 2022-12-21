// Exercice 7

// importation de child process
const { exec } = require('child_process');
const { stdout, stderr } = require('process');

// mise en place de l'execution de la commande ipconfig (dir = ls)
exec('ipconfig', (err, stdout, stderr) => {
  // vérification si il n'y a pas d'erreur, si il y en a une rentrer dans le if et afficher l'erreur
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  // executer la commande
  console.log(stdout)

});

/**
 * Programme prof
 */

exec('dir', (err,stdout, stderr) =>{
  if (err) console.log(err)

  console.log(stdout);
})