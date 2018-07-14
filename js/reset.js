'use strict';
/* global profileImage miniBox */

var resetButton = document.querySelector('.reset');
var nameFilled = document.querySelector('.card__name--name');
var roleFilled = document.querySelector('.card__job--job');
var iconsRemove = document.querySelectorAll('.card__foot--icon');
var formRemove = document.querySelectorAll('.fieldset__rellena--input');
var borderColor = document.querySelector ('.card__head--border');
var nameFont = document.querySelector ('.card__name--name');
var skillsColor = document.querySelector ('.card__foot--box');
function resetAll() {
  //reset color y fuentes
  borderColor.style.borderColor = '#a2deaf';
  nameFont.style.color = '#114e4e';
  nameFont.style.font = 'Comic Sans MS, Comic Sans, Chilanka, sans-serif';
  skillsColor.style.backgroundColor = '#438792';
  // reset nombre y role

  nameFilled.innerHTML = 'Nombre Apellido';
  roleFilled.innerHTML = 'Descripcion';

  //reset pic
  profileImage.style.backgroundImage = '';
  miniBox.style.backgroundImage = '';

  // quitar iconos
  for (var i = 0; i<iconsRemove.length; i++){
    iconsRemove[i].style.display = 'none';
  }
  //quitar valores introducidos en el formulario

  for (var i = 0; i < formRemove.length; i++) {
    formRemove[i].value = '';
  }
}
resetButton.addEventListener('click', resetAll);

