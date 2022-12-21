// Exercice 7

// importation de child process
const { exec } = require('child_process');

// mise en place de l'execution de la commande ipconfig
exec('ipconfig', (err, stdout, stderr) => {
  // vérification si il n'y a pas d'erreur, si il y en a une rentrer dans le if et afficher l'erreur
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  // executer la commande
  console.log(stdout)

});