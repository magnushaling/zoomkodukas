const pildiAadressid = [
    './pildid/ss1.png',
    './pildid/ss2.png',
    './pildid/ss3.png',
]

function teePildiHTML(index) {
    let pildiAadress = pildiAadressid[index]
    return '<img src="' + pildiAadress + '">'
}

let pildiGaleriiHTML = ''

for (let i = 0; i < pildiAadressid.length; i++) {
    pildiGaleriiHTML += teePildiHTML(i)
}

document.getElementById('valjund').innerHTML = pildiGaleriiHTML