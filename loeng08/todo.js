let nimi = 'Magnus'

nimi = 'Magnus'

const ylesanded = [
    'Pesta hambad',
    'Toida kassi',
    'Praadida mune',
    'Minna tööle'
]

let valjundElement = document.getElementById('valjund')
let valjundHTML = ''

valjundHTML += '<ol>'

for (let i = 0; i < ylesanded.length; i++) {
    valjundHTML += '<li>' + ylesanded[i] + '</li>'
}

valjundHTML += '</ol>'

valjundElement.innerHTML = valjundHTML