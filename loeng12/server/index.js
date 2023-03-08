const http = require("http");

const host = 'localhost';
const port = 8080;

//matkade loetelu läheb array sisse. Iga matka kohta koostatakse list objekte/andmeid {} 
const matkadeAndmed = {
    labiviija: 'Magnus ja Karl',
    matkad: [
        {
            pealkiri: 'Rännak ümber Ülemiste',
            kestvus: '1h',
            pilt: './pildid/jalgsi.png',
            kuupaev: '02.07.2023',
            labiviija: 'Karl',
        },
        {
            pealkiri: 'Paadimatk Emajõel',
            kestvus: '3h',
            pilt: './pildid/paadiga.png',
            kuupaev: '02.08.2023',
            labiviija: 'Magnus'
        },
        {
            pealkiri: 'Rattamatk Lõuna-Eestis',
            kestvus: '6h',
            pilt: './pildid/rattaga.png',
            kuupaev: '02.09.2023',
            labiviija: 'Karl',
        },

    ]
}

const requestListener = function (req, res) {;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.end(JSON.stringify(matkadeAndmed));
    };

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});