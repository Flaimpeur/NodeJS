//  ----   Déclaration de mes variables ----
let players = 1;
let player1 = null;
let player2 = null;
let nl = '\n  -------------\n';
let myBoard = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
];
let game = false;

let input = process.stdin;

// Fonction pour affiche dans le terminal ce qu'on veux comme par exemple un message (au lieux de mettre console.log)
function print(out) {
    process.stdout.write(out);
}


// Fonction pour faire apparaitre mon tableau
function printBoard() {
    let res = '    1   2   3 \n' + nl;
    for (let lines in myBoard) {
        res += (1 - -lines) + " | " + myBoard[lines].join(' | ') + ' |\n' + nl; // le \n sert a aller a la ligne
    }
    print(res);
}

// Fonction pour appeler le premier joueur et lancer le jeu
function main() {
    if (!game) { // Si le jeu n'est pas lancer alors demander le nom du joueur 1
        print("Enter Player 1 : ");
    }
}

// Fonction pour demander l'emplacer a jouer du jour
function prompt() {
    print(`\nIt's ${clr(players, 'yellow')}'s turn. \nPlease enter the position of the line and column where you wanna play. Like that "x y" : `);
}

// fonction pour vérifier que ce sont bien des chiffres rentrer et sous la forme "x y" ( par exemple 1 1)
function check(data) {
    data = data.toString().replace(/\n/, '').trim();
    if (/^(1|2|3)\s+(1|2|3)$/gi.test(data)) { // On test si se sont bien des chiffre et si ils ont bien un espace entre le premier et le deuxième si oui alors on prend la valeur et on passe a la suite
        return data.toString().replace(/\s+/g, ' ').split(' ');
    }
    print(clr("Wrong input!\n", 'red')); // si sa ne rentre pas dans la condition précédente alors c'est mal écrit et il faut le re écrire
    prompt();
    return false;
}

// Fonction pour le vainceur
function isWinner(p) {
    let m = p == 1 ? 'X' : 'O';
    return checkDiagonals(m) || checkLines(m) || checkColumns(m); // On va vérifier si il y a une ligne de 3 X ou O, ou on va vérifier si il y a une colonne de X ou O, ou on va vérifier si il y a une colonne de X ou O. ET tout sa grace au fonction écrire plus bas
}

// Fonction pour vérifier si ils sont bloquer donc si c'est une égalité car toute les cases sont remplis et aucun des deux n'a gagner
function isStuck() {
    let Stuck = true;
    for(let i=0; i<3; i++) { // Pour i égale 0 et inférieur à 3 on fait la suite 
        for(let j=0; j<3; j++) { // Pour j égale 0 et inférieur à 3 on fait la suite
            if(myBoard[i][j] == ' ') { // on vérifie si la case est vide si elle est vide alors les joueurs ne sont pas encore bloquer
                Stuck = false;
            }
        }
    }
    return Stuck; // si il y a aucune case vide et aucun vainceur alors ils sont bloquer
}

// Fonction pour vérifier si sur une ligne il y a 3 fois le même symbole
function checkLines(m) {
    for (let lines of myBoard) {
        if (lines[0] == m && lines[1] == m && lines[2] == m) return true; // On vérifie si il y a 3 fois le même symbole sur une ligne et si oui alors il y a un vainceur et on renvoie true SI non alors on renvoie false et il n'y a pas de vainceur en ligne
    }
    return false;
}


// fonction pour vérifier si sur une colonne il y a 3 fois le même symbole
function checkColumns(m) {
    for (let col in myBoard) {
        if (myBoard[0][col] === m && myBoard[1][col] === m && myBoard[2][col] === m) return true; // on vérifier si dans les 3 case il y a les même symbole et si oui alors on renvoie vrai et on dit qu'il y a un vainceur sinon on renvoie false et il n'y a pas de vaiceur en colonne
    }
    return false;
}


// fonction pour vérifier si sur une diagonale il y a 3 fois le même symbole
function checkDiagonals(m) {
    return (myBoard[0][0] === m && myBoard[1][1] === m && myBoard[2][2] === m) || (myBoard[2][0] === m && myBoard[1][1] === m && myBoard[0][2] === m); // On renvoie un vainceur si sur les 3 case en diagonale il y a le même symbole et donc un vainceur MAIS si il n'y a pas 3 fois le même symbole alors on ne renvoie rien
}

// focntion pour donner de la couleur du text
function clr(text, color) {
	const myclr = { red: 91, green: 92, blue: 34, cian: 96, yellow: 93 }[color]; // On déclare la variable qui est de type objet pour pouvoir définir la couleur
	if (myclr) return "\x1b[" + myclr + "m" + text + "\x1b[0m";
}


// Le jeux

input.on('data', data => {
   if (!game) { // si le jeux n'est pas deja lancer alors fait ce qui va suivre
       if (!player1) {  // entrer du deuxième joueur si ce n'est pas deja fait
        player1 = data.toString().replace(/\n/g, '');
           print("Enter Player 2 : ");
       }
       else if (!player2) { // si c'est deja fait alors lancement du jeux
        player2 = data.toString().replace(/\n/g, '');
           game = true;
           printBoard();
           prompt();
       }
   } else { // mais si le jeux est deja lancer alors faire sa
       if (check(data)) {
           let i = check(data).map(x => parseInt(x) - 1);
           if (myBoard[i[0]][i[1]] !== ' ') { // Ici on vérifie si la case est libre si elle ne l'ai pas on affiche le message suivant
               print(clr('Invalid move ! This case is already taken.\n', 'red'));
               prompt();
           } else { // Si la case est libre alors on fait la suite :
            myBoard[i[0]][i[1]] = players == 1 ? 'X' : 'O';
                if (isWinner(players)) { // Tout d'abord on vérifie si un jour un gagner (donc si il a aligner 3 X ou O) grace a la fonction
                    printBoard();
                    print(clr(`Congrats ! ${players} you Won 🎉🎉 !\n`, 'blue')); // si il gagne on affiche cela
                    process.exit(); // puis on sort du jeu
                }
                if (isStuck()) { // Ensuite on vérifie si c'est une égalité ou non grace a la fonction
                    printBoard();
                    print(clr(`Tie\n`, 'green')); // SI c'est une égalité on écrit le message suivant
                    process.exit(); // puis on sort du jeu
                }
                players = players == 1 ? 2 : 1; // Mais si ce n'est ni une égalité ni une victoire donc que ce n'est pas fini alors on rentre juste le X ou le O dans la case dite du joueur et on passe au tour suivant
                printBoard();
                prompt();
           }
       }
   }
})

// lancement de la fonction principale pour le début du jeu
main()