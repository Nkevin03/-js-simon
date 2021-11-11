// Costante 5 numeri casuali
const arrayComp = [ranNum(0, 10), ranNum(0, 10), ranNum(0, 10), ranNum(0, 10), ranNum(0, 10)]

// Numeri messi dall'utente
const User = []

const truenumber = []

const columnsection = document.querySelector(".container .column")

for (let i = 0; i < arrayComp.length; i++) {
    columnsection.innerHTML += `<div>${arrayComp[i]}</div>`
}

setTimeout(() => {
    columnsection.innerHTML = ''
}, 2990);

setTimeout(() => {
    // Ciclo numeri individuati
    for (let i = 0; i < arrayComp.length; i++) {
        User.push(parseInt(prompt('Metti i numeri che ricordi')))
    }

    for (let i = 0; i < User.length; i++) {
        if (User[i] === arrayComp[i]) {
            truenumber.push(User[i])
        }
    }

    columnsection.innerHTML +=`<h1>Ne hai indovinati ${truenumber.length}</h1>`

    for (let i = 0; i < truenumber.length; i++) {
        columnsection.innerHTML += `<div>${truenumber[i]}</div>`
    }

}, 3000);

// Funzione numeri casuali

function ranNum(min, max) {
    let rNum = Math.floor(Math.random() * max) + min;
    return rNum;
}