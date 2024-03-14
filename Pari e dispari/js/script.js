// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all'utente di scegliere pari o dispari
const evenOrOddUser = prompt('Pari o dispari?')
// Chidedo all'utente un numero compreso tra 1 e 5
const userNumber = parseInt(prompt('Dimmi un numero da 1 a 5'))
// Il computer genera un numero casuale da 1 a 5 utilizzando una funzione
const computerNumber = randomNumber(1, 5)
console.log(computerNumber)

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Sommo i numeri
let sum = userNumber + computerNumber
console.log(sum)
// Utilizzo una funzione per stabilire se la somma dei due numeri è pari o dispari
let evenOrOdd = isEvenorOdd(sum)
console.log(evenOrOdd)

function isEvenorOdd (number){
    if (number % 2 === 0){
        return 'pari'
    } else {
        return 'dispari'
    }
}
// Se il risultato della funzione è uguale a quello messo dall'utente nel primo prompt allora vince, altrimenti perde.
// Stampo del risultato come alert
if (evenOrOddUser === evenOrOdd) {
    alert ('Complimenti, hai vinto!')
} else {
    alert ('Mi dispiace, hai perso')
}

