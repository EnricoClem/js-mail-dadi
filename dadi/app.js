// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let userRoll = 0;
let machineRoll = 0;
let rollResult = '';

// Collegare il tasto di avvio dal DOM
const buttonDiceRoll = document.querySelector('[type="button"]');
buttonDiceRoll.addEventListener('click', function () {

    // Prendere un numero casuale dall'array per l'utente
    let userRoll = (Math.floor(Math.random() * 6) + 1);
    console.log('User roll: ', userRoll);

    // Prendere un numero casuale dall'array per il computer
    let machineRoll = (Math.floor(Math.random() * 6) + 1);
    console.log('Machine roll: ', machineRoll);

    // Confrontare i due risultati:
    // SE l'utente ha il numero maggiore vince l'utente
    if (userRoll > machineRoll) {
        rollResult = "L'umanità trionfa, sei l'eletto!";
        console.log(rollResult);
    // ALTRIMENTI vince la macchina
    } else if (userRoll < machineRoll) {
        rollResult = "Le macchine hanno la meglio.";
        console.log(rollResult);
    // ALTRIMENTI SE i numeri sono uguali è un pareggio
    } else {
        rollResult = "È un pareggio, vuoi ritentare?";
        console.log(rollResult);
    }

})

// Stampare su DOM il risultato