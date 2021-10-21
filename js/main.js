/**
 * BIGLIETTI DEL TRENO
 * 
 * 1. richiesta del numero di chilometri che si vogliono percorrere 
 * 2. richesta età del passeggero
 * 3. calcolo del prezzo per n° chilomentri (o,21 euro a km)
 * 4. applicazione sconto 
 */


// 1. richiesta del numero di chilometri che si vogliono percorrere 
const km = parseInt( prompt('quanti chilometri vuoi percorrere?') );
console.log ('numero chilometri' ,  km);

// 2. richiesta età del passeggero
const age = parseInt( prompt('quanti anni hai?') );
console.log ('numero di anni' ,  age);

// 3. calcolo del prezzo per n° chilomentri

const prezzo = km * 0.21;
console.log('prezzo del biglietto in base a km' , prezzo);

/* calcolo del prezzo totale del biglietto */
let prezzofinale = prezzo * km;
console.log('prezzo finale del biglietto' , prezzofinale);


