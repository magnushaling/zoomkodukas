const ylesanne1 = {
    kirjeldus: 'Lugeda head raamatut',
    olulisus: 3,
    kasTehtud: false,
    kategooria: 'toidud'
}

const ylesanne2 = {
    kirjeldus: 'Minna kinno',
    olulisus: 3,
    kasTehtud: true,
    kategooria: 'kultuur'
}

const ylesanne3 = {
    kirjeldus: 'Jookse hommikuti',
    olulisus: 4,
    kasTehtud: false,
    kategooria: 'tervis'
}

const ylesanded = [
    ylesanne1,
    ylesanne2,
    ylesanne3
]

function koostaYlesandeHTML (ylesanne) {
let margitud = '' 

if (ylesanne.kasTehtud) {
    margitud = 'checked'

}

const ylesanneHTML = `
<div class="ylesanne">
    <div class="kasTehtud col-1"><input type="checkbox" name="kasTehtud" ${margitud} ></div>
    <div class="kirjeldus col-6">${ylesanne.kirjeldus} </div>
    <div class="kategooria col-3">${ylesanne.kategooria} </div>
    <div class="olulisus col-2">${ylesanne.olulisus} </div>
</div>
`
    return ylesanneHTML
}

let koguValjundHTML = ''

for (let ylesanne of ylesanded) {
    koguValjundHTML += koostaYlesandeHTML (ylesanne)
}

function lisaUusYlesanne() {
    const ylesandeTekst = document.getElementById('ylesanne').value
    const olulisus = document.getElementById('olulisus').value
    const ylesanne = {
        kirjeldus: ylesandeTekst,
        olulisus: olulisus,
        kasTehtud: false,
        kategooria: 'toidud'    
    }

    ylesanded.push(ylesanded)
    valjastaYlesanded()
}

document.getElementById('valjund').innerHTML = koguValjundHTML