let nimi = prompt ('Sisesta oma nimi')

let valjundElement = document.getElementById ('valjund')
valjundElement.innerHTML = 'Tähed sinu nimes: <br>'

for (let i=nimi.length-1; i >= 0; i--) {
    let taht = nimi[i]
    if (taht=='õ'){
        valjundElement.innerHTML += '<br>*</br>'
    } else {
        valjundElement.innerHTML += nimi[i] + '<br>'
}
}

valjundElement.innerHTML += '<br>'

for (let i=0; i < nimi.length; i++) {
    valjundElement.innerHTML += nimi[i] + '<br>'
}

