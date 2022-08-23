// questo è un commento per una singola riga, da utilizzare anche di fianco

/* questo è un commento multiriga, rimane aperto fino alla chiusura */


alert("PROMO: Under 18 - 20% e over 65 -40% !!");

let percorrenzaKm = window.prompt("Quanta strada vuoi fare? (Inserisci il valore in km)");

let etàViaggiatore = window.prompt("Quanti anni hai? (Inserisci il valore in numeri)");



document.getElementById("am_km").innerHTML = "Quanti KM vuoi percorrere? " + percorrenzaKm;

document.getElementById("am_age").innerHTML = "Qual è la tua età? " + etàViaggiatore;



function costoTotale(percorrenzaKm, etàViaggiatore) {
    let risultato;
    let risultatoScontato;

    risultato = percorrenzaKm * 0.21;

    if (etàViaggiatore > 65)
        risultatoScontato = risultato - (risultato / 100 * 40);

    if (etàViaggiatore < 18)
        risultatoScontato = risultato - (risultato / 100 * 20);

    else
        return risultato.toFixed(2);

    return risultatoScontato.toFixed(2);

}

document.getElementById("am_cost").innerHTML = "Prezzo del biglietto " + costoTotale(percorrenzaKm, etàViaggiatore);
