let matkad = [
    {
        nimi: 'Jalgsimatk Pärnus',
        kirjeldus: 'Kirjeldus matkast asub siin',
        pildiAadress: './pildid/jalgsi.png',
        kuupaev: '05.03.2023',
    },
    {
        nimi: 'Rattamatk Jõgeval',
        kirjeldus: 'Kirjeldus matkast asub siin',
        pildiAadress: './pildid/rattaga.png',
        kuupaev: '06.04.2023'
    },
    {
        nimi: 'Paadimatk Tartus',
        kirjeldus: 'Kirjeldus matkast asub siin',
        pildiAadress: './pildid/paadiga.png',
        kuupaev: '08.07.2023'
    },
]

function koostaMatkadHTML(matk) {
    return `
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">${matk.nimi}</h3>
      <p class="card-text">${matk.kirjeldus}</p>
      <p class="card-text">${matk.kuupaev}</p>
      <a href="#" class="btn btn-primary">Vaata</a>
    </div>
    <img class="card-img-bottom" src="${matk.pildiAadress}" alt="Card image" style="width:100%">
  </div>
</div>
    `
}

let koikMatkadHTML = ''

for (let matk of matkad) {
    koikMatkadHTML += koostaMatkadHTML (matk)
}

document.getElementById('valjund').innerHTML = koikMatkadHTML

const API_URL = 'https://expressjs-postgres-production-c512.up.railway.app/treks';


async function getTreks() {
    const treks = await fetch(`${API_URL}/treks`).then((response) => response.json())
    console.log(treks);
}



