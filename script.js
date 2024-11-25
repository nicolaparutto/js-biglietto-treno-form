//elementi del form:
const passengerName = document.getElementById('name-input');
const kmRoute = document.getElementById('km-input');
const passengerAge = document.getElementById('age-select');
const form = document.getElementById('form');

//elementi in cui salvare i dati:
const name = document.getElementById('name');
const age = document.getElementById('age');
const km = document.getElementById('route-km');
const pricefinal = document.getElementById('final-price');




form.addEventListener('submit', (send) => {
   send.preventDefault();

   name.innerText = passengerName.value.trim();
   age.innerText = passengerAge.value;
   km.innerText = `${kmRoute.value.trim()} Km`;
   
})