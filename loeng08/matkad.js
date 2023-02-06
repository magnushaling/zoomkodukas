const matkad = [
    'Jalgsimatk Kõrvemaal',
    'Süstamatk Soomaal',
    'Rattamatk Pärnumaal'
]

function teeMatkaHtml(index) {
    let matk = matkad[index]
    return '<div class="rida"><img src="nool.png" > ' + matk + '</div>'
}

let matkadeLoeteluHtml = ''
for (let i = 0; i < matkad.length; i++ ) {
    matkadeLoeteluHtml += teeMatkaHtml(i)
}

document.getElementById('matkad').innerHTML = matkadeLoeteluHtml