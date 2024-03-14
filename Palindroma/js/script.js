// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente una parola
const userWord = prompt('Dimmi una parola')

// Utilizzo la mia funzione per capire se la parola è palindroma e stampo il risultato
let isItPalindrom = isPalindrome(userWord)
alert (isItPalindrom)

// La funzione "scorre" ogni carattere della parola al contrario e la riassembla in una parola
// se la parola al contrario è uguale a quella originale allora return 'This word is palindrome'.
function isPalindrome (word){

    let wordBackwards = ''
    for (let i = word.length - 1; i >= 0; i--){
        let thisLetter = word[i]
        wordBackwards += thisLetter
    }
    if (userWord === wordBackwards){
        return 'This word is palindrome'
    } else {
        return 'This word is not palindrome'
    }
}