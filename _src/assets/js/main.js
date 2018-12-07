'use strict';

function getRandomNumber(max) {
    const randomNumber = Math.ceil(Math.random() * max);
    return randomNumber;
  }
const myRandomNumber = getRandomNumber(100);
console.log(myRandomNumber);
  

const tryBtn = document.querySelector('.btn__number');
const playerNumber = document.querySelector('.box__number');
const writtingPlace = document.querySelector('.answer__number');
let counter = document.querySelector('.play__counter');

function showPlayerNumber () {
    const writePlayerNumber = playerNumber.value;
    if (parseInt(writePlayerNumber) === myRandomNumber) {
        writtingPlace.innerHTML = 'Lo has conseguido';
    } else if (parseInt(writePlayerNumber) > myRandomNumber) {
        writtingPlace.innerHTML = 'Es un número muy alto';
    } else if (parseInt(writePlayerNumber) < myRandomNumber) {
        writtingPlace.innerHTML = 'Es un número muy bajo';
    };
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    return console.log(writePlayerNumber);
    }

tryBtn.addEventListener('click', showPlayerNumber);





