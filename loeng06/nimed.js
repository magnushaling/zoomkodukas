let nimi = prompt('sisesta oma nimi')

let valjundElement = document.getElementById('valjund')
valjundElement.innerHTML = 'Tähed sinu nimes: <br>'

for (let i = 0; i < nimi.length; i++) {
    valjundElement.innerHTML += nimi[i] + '<br>'
}

if (nimi.length <= 6) {
    valjundElement.innerHTML += '<h2> Sul on lühike nimi <h2>'
} else {
    valjundElement.innerHTML += '<h2> Sul on pikk nini <h2>'
}

function valjastaRuut(x) {
    console.log( x * x )
}

valjastaRuut(10)
valjastaRuut(100)
valjastaRuut(68)