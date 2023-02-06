let varv = prompt ('Arva õige värv')
while (varv !== 'roheline') {
    varv = prompt('Vale värv, arva uuesti!')
}

document.getElementById('valjund').innerHTML = '<h2>Jah minu lemmikvärv on roheline</h2>'