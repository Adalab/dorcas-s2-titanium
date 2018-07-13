'use strict';

var tarjetacontenedor = document.querySelector('');
var colorContenedor = document.querySelectorAll('');
var radioRojo = document.querySelector('');
var radioGris = document.querySelector('');
var radios = document.querySelectorAll('.radio');
function  {
 for(var i = 0; i < colorContenedor.length; i++) {
   radios[i].addEventListener('click', );
 }
}
function ponerEstilos() {

  if (radioRojo.checked) {
    tarjetacontenedor.classList.add('');
  } else if (radioGris.checked) {
    tarjetacontenedor.classList.add('');
  } else {
    tarjetacontenedor.classList.add('');
  }
}
