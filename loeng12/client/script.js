//muutuja url saab uue väärtuse
const url = 'http://localhost:8080';
const app = document.querySelector('#app');

async function kysiMatkad() {

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let matkadHTML = `<p>Matkade läbiviijad: ${data.labiviija}</p>`;

    for (let i = 0; i < data.matkad.length; i++) {
        matkadHTML += `<div class="card">
        <div class="card-body">
        <h3 class="card-title">${data.matkad[i].pealkiri}</h3>
        <p class="card-text">Kestvus ${data.matkad[i].kestvus}</p>
        <p class="card-text">Läbiviija ${data.matkad[i].labiviija}</p>
        <p class="card-text2">Kuupäev ${data.matkad[i].kuupaev}</p>
        <a href="#" class="btn btn-primary">Loe lisaks</a>
        <button class="btn btn-secondary" id="nupp" onclick="nupp()">Soovin osaleda</button>
        </div>
            <img class="card-img-bottom" src="${data.matkad[i].pilt}" alt="Card image" style="width:100%">
        </div>`;

    }
  
    app.innerHTML = matkadHTML;
    
}

function nupp() {
    alert("Olete edukalt registreerunud matkale!");
  }

kysiMatkad();