// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Creare una lista di email accettate
let AcceptedEmailList = ['pippofranco@keficomail.com','rubryrubacuore@katya.it','gabibbo@belandi.mediaset','principenigeriano@help.ni']

// Input per il cliente di inserimento della propria mail
const userEmail = document.getElementById('useremail')

// Click di invio della propria mail
const buttonUserEmail = document.querySelector('[type="submit"]')

// Confornto della mail inserita con quelle accettate
buttonUserEmail.addEventListener('click', function () {
    console.log('avvio confronto')

})

// SE la mail è presente nell'elenco fornire esito positivo
// ALTRIMENTI forni re esito negativo