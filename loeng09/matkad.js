let matkad = [
    {
        nimi: 'Jalgsimatk Pärnus',
        kirjeldus: 'Kirjeldus matkast asub siin',
        pildiAadress: './pildid/matkaja.png'
    },
    {
        nimi: 'Rattamatk Jõgeval',
        kirjeldus: 'Kirjeldus matkast asub siin',
        pildiAadress: './pildid/matkaja.png'
    },
    {
        nimi: 'Paadimatk Tartus',
        kirjeldus: 'Kirjeldus matkast asub siin',
        pildiAadress: './'
    },
]

function koostaMatkaHTML(matk) {
    return `
    <div class="card">
    <img class="card-img-top" src= "${matk.pildiAadress}" alt="">
    <div class="card-body">
    <h4> ${matk.nimi} </h4>
    <p> ${matk.kirjeldus} </p>  
    </div>
    </div>
    `
}

let koikMatkadHTML = ''

for (let matk of matkad) {
    koikMatkadHTML += koostaMatkaHTML (matkad)
}

document.getElementById('valjund').innerHTML = koikMatkadHTML