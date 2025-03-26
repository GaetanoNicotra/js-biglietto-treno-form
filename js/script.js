// RECUPERO GLI INPUT DAL DOM

const distance = document.getElementById('distance')

const age = document.getElementById('age')

const button = document.querySelector('.send')

const nameField = document.getElementById('nameField')
// RECUPERO GLI ELEMENTI DEL DOM DOVE ANDRANNO INSERITI I DATI
const name = document.getElementById('name')

const outputPrice = document.getElementById('outputPrice')

const outputDistance = document.getElementById('outputDistance')


// CREO L'EVENTO CHE DEVE VERIFICARSI AL CLICK DEL BOTTONE
button.addEventListener('click', function () {
    event.preventDefault()
    name.innerHTML = nameField.value;
    outputDistance.innerHTML = 'I chilometri che dovrai percorrere sono:' + ' ' + distance.value

    let distancePrice = (distance.value * 0.21).toFixed(2);
    console.log(distancePrice + " " + "Euro (Prezzo intero)");

    if (age.value < 18) {
        let priceUnderage = (distancePrice - distancePrice * 20 / 100).toFixed(2);
        console.log(priceUnderage + " " + "Euro (prezzo scontato per minorenni)");
    }

    else if (age.value > 65) {
        let priceOver65 = (distancePrice - distancePrice * 40 / 100).toFixed(2);
        console.log(priceOver65 + " " + "Euro (Prezzo scontato per maggiorenni)");
    }

    else {
        console.log(distancePrice + " " + "Euro (Prezzo intero, non rientri in una fascia di età in sconto)")
    }
    outputPrice.innerHTML = 'Il prezzo del biglietto è: ' + '€ ' + distancePrice;

})