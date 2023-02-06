let valjundElement = document.getElementById('valjund')
valjundElement.innerHTML = 'Numbrid: <br>'
for (let number = 1; number <= 10; number = number + 1) {
    valjundElement.innerHTML += number + '<br>'
    //+= vasakule poolele lisatakse juurde kõik paremal olev
}

for (let number = 10; number >= 1; number = number - 1) {
    valjundElement.innerHTML += number + '<br>'
    //+= vasakule poolele lisatakse juurde kõik paremal olev
}

let nimi = 'Jaanus'
