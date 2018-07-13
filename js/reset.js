'use strict';
var profilePic = document.querySelector ('.card__pic');
var miniPic = document.querySelector ('.mini');
var resetButton = document.querySelector('.reset');
var nameFilled = document.querySelector('.card__name--name');
var roleFilled = document.querySelector('.card__job--job');
var iconsRemove = document.querySelector('.card__foot--social');
var formRemove = document.querySelectorAll('.fieldset__rellena--input');
var colorRemove = document.querySelector('#')
function resetAll() {
  // // paleta reset
  // card.classList.remove('paleta-azul', 'paleta-roja', 'paleta-gris');
  // card.classList.add('paleta-azul');
  // // font reset
  // cardInfo.classList.remove('font-card--comicsans', 'font-card--ubuntu', 'font-card--montserrat');
  // cardInfo.classList.add('font-card--comicsans');

  // reset nombre y role
  nameFilled.innerHTML = 'Nombre Apellido';
  roleFilled.innerHTML = 'Descripcion';

  //reset pic
  profilePic.style.backgroundImage = 'url(' + '../images/pollito.png' + ')';
  miniPic.style.backgroundImage = 'url(' + '../images/pollito.png' + ' )';

  // quitar iconos
  iconsRemove.innerHTML= '';
  //quitar vlaores introducidos en el formulario

  for (var i = 0; i < formRemove.length; i++) {
    formRemove[i].value = '';
    console.log (formRemove);
  }
}
resetButton.addEventListener('click', resetAll);

