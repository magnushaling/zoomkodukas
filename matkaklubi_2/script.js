const API_URL = 'https://expressjs-postgres-production-c512.up.railway.app'
const sisu = document.querySelector ('.sisu');

async function getTreks() {
    const treks = await fetch(`${API_URL}/treks`).then((response) => response.json());
    console.log(treks);
    sisu.innerHTML = '';

    for (const trek of treks) {
        sisu.innerHTML = `
    <div class="trek">
        <img src="${trek.image_url}" alt="Pilt pilt"/>
        <h3>${trek.title}</h3>
        <p>${trek.description}</p>
        <button onclick="signUp(${trek.id}")>Registreeri</button>
    </div>
    `;
    }
};