//let distance = prompt("Inserisci il numero dei Km da percorrere");
//let age = prompt("Inserisci la tua età")

const distance = document.getElementById('distance')

const age = document.getElementById('age')

const button = document.querySelector('.send')

button.addEventListner('click', function(){

let distancePrice = (distance * 0.21).toFixed(2);
console.log(distancePrice + " " + "Euro (Prezzo intero)");

if(age < 18){
    let priceUnderage = (distancePrice - distancePrice * 20 / 100).toFixed(2);
    console.log(priceUnderage  + " " + "Euro (prezzo scontato per minorenni)");
}

else if(age > 65){
    let priceOver65 = (distancePrice - distancePrice * 40 / 100).toFixed(2);
    console.log(priceOver65  + " " + "Euro (Prezzo scontato per maggiorenni)");
}

else{
    console.log(distancePrice + " " + "Euro (Prezzo intero, non rientri in una fascia di età in sconto)")}
})