// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let userRoll = 0;
let machineRoll = 0;

// Collegare il tasto di avvio dal DOM
const buttonDiceRoll = document.querySelector('[type="button"]');
buttonDiceRoll.addEventListener('click', function () {

    // Prendere un numero casuale dall'array per l'utente
    let userRoll = (Math.floor(Math.random() * 6) + 1);
    console.log(userRoll)

})

// Prendere un numero casuale dall'array per il computer
// Confrontare i due risultati
// SE l'utente ha il numero maggiore vince l'utente
// ALTRIMENTI SE i numeri sono uguali è un pareggio
// ALTRIMENTI vince la macchina
// Stampare su DOM il risultato