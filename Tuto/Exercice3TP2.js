// Exercice 3

//Déclaration de mes module
const http = require("http");
const myfs = require('fs').promises;

const host = 'localhost';
const port = 8000;

// début de la fonction pour lire mon fichier sur le serv
const requestListener = function (req, res) {

    // lecture du fichier selectionner
    myfs.readFile(__dirname + "/ServerStaticCharbonnier.html")
        // then est une fonction de callback
        .then(myFileServ => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(myFileServ);
        })
};

// Creation du serveur avec la fonction createServer
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});