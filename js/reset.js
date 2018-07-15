'use strict';
/* global profileImage miniBox */

var resetButton = document.querySelector('.reset');
var formRemove = document.querySelectorAll('.fieldset__rellena--input');
// var colorRemove = document.querySelector('#')
function resetAll() {
  // // paleta reset
  // card.classList.remove('paleta-azul', 'paleta-roja', 'paleta-gris');
  // card.classList.add('paleta-azul');
  // // font reset
  // cardInfo.classList.remove('font-card--comicsans', 'font-card--ubuntu', 'font-card--montserrat');
  // cardInfo.classList.add('font-card--comicsans');

  // reset nombre y role
  nombreVisor.innerHTML = 'Nombre Apellido';
  jobVisor.innerHTML = 'Descripcion';

  //reset pic
  profileImage.style.backgroundImage = 'url(../images/pollito.png)';
  miniBox.style.backgroundImage = 'url(../images/pollito.png)';

  // quitar iconos
  for (var i = 0; i<iconBorderVisor.length; i++){
    iconBorderVisor[i].style.display = 'none';
  }
  //quitar vlaores introducidos en el formulario

  for (var i = 0; i < formRemove.length; i++) {
    formRemove[i].value = '';
  }
}
resetButton.addEventListener('click', resetAll);

