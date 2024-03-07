// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Creare una lista di email accettate
let acceptedEmailList = ['pippofranco@keficomail.com','rubryrubacuore@katya.it','gabibbo@belandi.mediaset','principenigeriano@help.ni'];

// Input per il cliente di inserimento della propria mail
const userEmail = document.getElementById('useremail');
let emailResult = false;
const emailFinalResponse = document.getElementById('esito')

// Click di invio della propria mail
const buttonUserEmail = document.querySelector('[type="submit"]');

// Confornto della mail inserita con quelle accettate
buttonUserEmail.addEventListener('click', function () {
    console.log('avvio confronto');
    emailResult = false;

    for (let i = 0; email < acceptedEmailList.length; i++) {
        const emailCheck = acceptedEmailList[i];

        if (emailCheck === userEmail.value) {
            emailResult = true;
            email = acceptedEmailList.length;
        }
    }

    // Stampa risultato del confronto su DOM
    if (emailResult === true) {
        emailFinalResponse.innerHTML = `
        <h3>E-mail accettata!</h3>`
        console.log('Email accettata')
    } else {
        emailFinalResponse.innerHTML = `
        <h3>E-mail non registrata.</h3>`        
        console.log('Email rifiutata')
    }

})

// SE la mail è presente nell'elenco fornire esito positivo
// ALTRIMENTI forni re esito negativo