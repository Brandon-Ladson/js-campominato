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

  if (listaNumeriPc.indexOf(numeriPc) === -1) {
    listaNumeriPc.push(numeriPc);
  } else {
    i--;
  }
}

// console.log(listaNumeriPc);

// chiedo all'utente un numero, sempre diverso, compreso tra 1 e 100
var listaNumeriUtente = [];
var puntiUtente = 0;
var gameOver = false;

do {
  for (var i = 0; i < 84; i++) {

    var numeriUtente = parseInt(prompt("inserisci un numero tra 1 e 100"));

    // se il numero inserito dall'utente non è ancora stao inserito allora aggiungilo alla lista
    if (listaNumeriUtente.indexOf(numeriUtente) === -1) {
      listaNumeriUtente.push(numeriUtente);
      gameOver = true;
      puntiUtente++;

    // altrimente non aggiungerlo e compare un messaggo di avviso
    } else {
      // console.log("ha gia inserito questo numero");
      alert("ha gia inserito questo numero");
    }

    // console.log(listaNumeriUtente);

    // se il numero inserito dall'utente è presete tra quelli del pc termina il gioco
    if (listaNumeriPc.indexOf(numeriUtente) !== -1) {
      // console.log("sei esploso");
      puntiUtente--;
      i = 84;
      alert("BOOM!!!");
    }

    // console.log(puntiUtente);
  }

} while (gameOver != true);

// stampa in pagina il punteggio dell'utente, i suoi numeri e quelli del pc
document.getElementById('punti').innerHTML = "il tuo punteggio è: " + puntiUtente;;

document.getElementById('numeriutente').innerHTML = "i numeri da te inseriti sono: " + listaNumeriUtente;

document.getElementById('numeripc').innerHTML = "i numeri del pc sono: " + listaNumeriPc;


// funzioni

function genaratoreNumeriRandom(numero) {
  return Math.floor(Math.random() * numero) +1;
}
