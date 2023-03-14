const API_URL = 'https://expressjs-postgres-production-c512.up.railway.app';
const sisu = document.querySelector ('.matkad');

async function getTreks() {
    const treks = await fetch(`${API_URL}/treks`).then((response) => response.json());
    console.log(treks);
    sisu.innerHTML = '';

    for (const trek of treks) {
        sisu.innerHTML += `
            <a href="">${trek.title}</a>
    `;
    }
};

getTreks();