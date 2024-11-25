//richiamo gli elementi del form:
const passengerName = document.getElementById('name-input');
const kmRoute = document.getElementById('km-input');
const passengerAge = document.getElementById('age-select');
const form = document.getElementById('form');
const ticketContainer = document.querySelector('.ticket-container');

//imposto le variabili che poi verranno valorizzate e stampate in pagina:
const pageName = document.getElementById('name');
const pageAge = document.getElementById('age');
const pagekm = document.getElementById('route-km');
const pageFinalPrice = document.getElementById('final-price');

//dati utili per il calcolo dello sconto:
const prezzoKm = 0.21;
const discountMinorenne = 20;
const discountOver = 40;



form.addEventListener('submit', (send) => {
   send.preventDefault();

   //salvo in due variabili la selezione dell'età e i km indicati da percorrere.
   const age = passengerAge.value;
   const km = kmRoute.value;

   //calcolo del prezzo base:
   const prezzoBase = km * prezzoKm;

   //dichiaro una variabile che conterrà il prezzo finale:
   let prezzoFinale;

   //calcolo dello sconto sulle varie età:
   if (age == 'Minorenne'){
      const sconto = prezzoBase * (discountMinorenne / 100);
      prezzoFinale = prezzoBase - sconto;
   } else if(age == 'Anziano'){
      const sconto = prezzoBase * (discountOver / 100);
      prezzoFinale = prezzoBase - sconto;
   } else{
      prezzoFinale = prezzoBase;
   }

   //stampo in pagina:
   pageName.innerText = passengerName.value;
   pageAge.innerText = `(${passengerAge.value})`;
   pagekm.innerText = `${km} km`;
   pageFinalPrice.innerText = `${prezzoFinale.toFixed(2)}€`;

   //appare il biglietto in pagina:
   ticketContainer.classList.add('d-block');

   //resetto gli il form:
   resetForm()
});

//funzione per il reset:
function resetForm(){
   passengerName.value = '';
   passengerAge.value = '';
   kmRoute.value = '';
}
