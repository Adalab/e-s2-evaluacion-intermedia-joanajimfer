'use strict';

/* Primer paso, conseguimos un número aleatorio entre 0 y 100, que se presentará en la consola cada vez que se recargue la página
*/

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    const randomNumber = Math.ceil(Math.random() * max);
    return randomNumber;
  }
const myRandomNumber = getRandomNumber(100);
console.log(myRandomNumber);
  

/* Segundo paso, al pulsar el botón de prueba, acceder al contenido del input y mostrarlo en la consola
*/

const tryBtn = document.querySelector('.btn__number');

const playerNumber = document.querySelector('.box__number');

function showPlayerNumber () {
    const PlayerNumber = playerNumber.value;
    console.log(PlayerNumber);
    return PlayerNumber;
} 
const myPlayerNumber = showPlayerNumber();

tryBtn.addEventListener('click', showPlayerNumber);

/* Tercer paso, comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el feedback correspondiente en la pantalla
*/
const textbox = document.querySelector('.answer__number');

/* primera condición cuando el número sea el mismo*/

if (myRandomNumber === myPlayerNumber) {
    textbox.innerHTML = "HAS GANADO";
} else if (myPlayerNumber > myRandomNumber) {
    textbox.innerHTML = "Demasiado alto";
} else if (myPlayerNumber < myRandomNumber) {
    textbox.innerHTML = "Demasiado bajo";
}





