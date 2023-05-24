/**
 * Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
 */
//funcions
// dichiariamo una funzione nenza oggetti
function creatNewCell () {
    //creamo un elemento div nel documento nominandolo
    const cellElement = document.createElement ("div");
    //attribuiamo allo stesso div una classe di riferimento
    cellElement.className = "cell";
    //diciamo al programma cosa restituire
    return cellElement;
}



//sezioniamo la section.game
const sectionGame = document.querySelector("section.game");
//selezioniamo il bottone
const button = document.querySelector("button");

//aggiungiamo un evento nel bottone selezionato
button.addEventListener (("click"), function(){

    //diciamo al subito di svuotare la section.game per non avere una sovrapposizione degli elementi
    sectionGame.innerHTML = "";

    //const gridElement = document.querySelector ("div.cell");
    
    //inizio un ciclo che mi inserisca un numero stabilito di div
    for (let i = 0; i < 100; i++){

     //inseriamo la funzione creata allinterno di section.game
        sectionGame.appendChild (creatNewCell ())
    };


    const realCell = document.querySelector("div.cell");

    realCell.addEventListener('click', function(){
        console.log(i + 1);
        realCell.classList.toggle("active");
    });
});


