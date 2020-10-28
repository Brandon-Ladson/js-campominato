// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// ciclo per 16 numeri da 1 a 100 generati dal pc
var listaNumeriPc = [];

for (var i = 0; i < 16; i++) {
  var numeriPc = genaratoreNumeriRandom(100);
  listaNumeriPc.push(numeriPc);
  console.log("i numeri del pc sono: " + numeriPc);
}

// chiedo all'utente un numero, sempre diverso, compreso tra 1 e 100
var numeriUguali = false;
for (var i = 0; i < listaNumeriPc.length; i++) {
  var numeriUtente = parseInt(prompt("inserisci un numero tra 1 e 100"));
  console.log("i numeri dell'utente sono: " + numeriUtente);

  if (numeriUtente === listaNumeriPc[i]) {
    numeriUguali = true;
  }
}

if (numeriUguali === true) {
  console.log("HAI PERSO");
} else {
  console.log("HAI VINTO");
}

// se il numero inserito dall'utente è tra quelli generati dal pc finisce la partita

// stampare il punteggio, pari al quantitativo di numeri consentiti inseriti dll'utente


// funzioni

function genaratoreNumeriRandom(numero) {
  return Math.floor(Math.random() * numero) +1;
}
