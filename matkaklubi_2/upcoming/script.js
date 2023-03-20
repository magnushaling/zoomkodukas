const API_URL = 'https://expressjs-postgres-production-c512.up.railway.app/';
const sisu = document.querySelector('.sisu');

async function getTreks() {
  const treks = await fetch(`${API_URL}/treks?status=REGISTRATION_OPEN`).then((response) => response.json());
  console.log(treks);
  sisu.innerHTML = '';

  for (const trek of treks) {
    sisu.innerHTML += `
      <div class="trek">
        <div class="image">
          <img src="${trek.image_url}" height="100" alt="Pilt" />
        </div>
        <div class="content">
          <h3>${trek.title}</h3>
          <p>${trek.description}</p>
          <button onclick="signUp(${trek})">Registreeri</button>
        </div>
      </div>
    `;
  }

};

async function signUp(trek) {
  const treks = await fetch(`${API_URL}/treks/${trekId}`).then(response => response.jason());
  sisu.innerHTML = `
  <div class="registration">
    Registreerumine matkale "${trek.title}"
    <button onclick="getTreks()">Tagasi</button>
  </div>
  `;
}



getTreks();