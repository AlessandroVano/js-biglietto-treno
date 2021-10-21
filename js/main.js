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

//  4. applicazione sconti età
if (age < 18){
    prezzofinale = prezzofinale - (prezzofinale * 40/100);
    console.log('sconto minori di 18 anni' , prezzofinale);

}else if (age > 65){
    prezzofinale = prezzofinale -(prezzofinale * 60/100);
    console.log('sconto per gente con età maggiore di 65 anni' , prezzofinale);
}

//OUTPUT
document.getElementById('ticket').innerHTML = `il prezzo del biglietto è: ${prezzofinale}`