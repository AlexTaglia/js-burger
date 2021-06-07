/*
Create Your Burger
Il programma dovrà consentire di calcolare il prezzo del panino 
selezionando o deselezionando gli ingredienti proposti.
*/

// Creo una variabile che va a prendere il mio bottone per calcolare il totale
var createTotal = document.getElementById('calculate');

// Creo una variabile dove verrà restituito il totale
var totalOutput = document.getElementById('total');

// Creo la mia lista eventi quando vado 'on click' sul bottone che ho messo 
// nella viabile'createTotal
createTotal.addEventListener('click', function (){

    // Setto il totale a 50 che è la base del mio panino
    var total = 50;

    // Creo una variabile per racchiude le classi degli ingredienti 
    var checkIngredients = document.getElementsByClassName('check-ingredient')

    // Navigo dentro la variabile degli ingredienti per verificare se è checkata
    for (var i = 0; i < checkIngredients.length; i++){
        
        //Se è checkata sommo il vaolre al totale
        if (checkIngredients[i].checked){
            total += parseInt(checkIngredients[i].value) 
        }
    }
    
    // Stampo il totale
    totalOutput.innerHTML = total;

})