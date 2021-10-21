/**
 * BIGLIETTI DEL TRENO
 */


// 1. richiesta del numero di chilometri che si vogliono percorrere 
const km = parseInt( prompt('quanti chilometri vuoi percorrere?') );


// 2. richiesta età del passeggero
const age = parseInt( prompt('quanti anni hai?') );


// 3. calcolo del prezzo per n° chilomentri

const prezzo = km * 0.21;


/* calcolo del prezzo totale del biglietto */
let prezzofinale = prezzo * km;


//  4. applicazione sconti età
if (age < 18){
    prezzofinale = prezzofinale - (prezzofinale * 40/100);
   

}else if (age > 65){
    prezzofinale = prezzofinale -(prezzofinale * 60/100);
   
}


//OUTPUT
document.getElementById('ticket').innerHTML = `il prezzo del biglietto è: ${prezzofinale.toFixed(2)}`

