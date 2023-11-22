


// Chiedi all’utente la sua email... 

// const mail = prompt ("inserisci la tua mail per ottenere udienza presso il circolo dei re invisibili");

// console.log(mail);

// // controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. 

// // // Creo una lista con una const array 

// // const emailList = [ "genoveffa@gmail.com" , "asdrubale@gmail.com" , "sosipatro@gmail.com" , "clodomilda@gmail.com"]; 

// // // Controllo che la mail inserita dall'utente sia inserita nell'elenco 

// // if (emailList.includes(mail)){
// //     alert("Benvenuto! Ti stavamo aspettando!") }

// //     else {  alert ("Chi sei? Accesso negato!")
// }

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”


// Number Generator per PC 

let dadiPc = Math.floor (Math.random ()*6) +1;

console.log(dadiPc);

let dadiUser = Math.floor (Math.random ()*6) +1;

console.log(dadiUser);

if (dadiPc > dadiUser) {
    setTimeout(function() {
        alert("Ha vinto il pc :( Riprova e sarai più fortunato");
    }, 2000);
    
}
else if (dadiUser > dadiPc) {
    setTimeout(function(){  
    alert("Congratulazioni! Hai vinto!")}, 2000);
}

else {
    setTimeout(function(){  
        alert("Pari Patta!")}, 2000);
}

let userScore = document.getElementById("user-score");

userScore.innerHTML = "Il punteggio utente è: " + dadiUser;

let pcScore = document.getElementById("pc-score");

pcScore.innerHTML = "Il punteggio del pc è: " + dadiPc;
