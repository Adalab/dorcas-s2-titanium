'use strict';
/* global jobVisor iconBorderVisor profileImage miniBox nombreVisor */


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

  // reset habilidades
  removeSelect();
  removeSelect();
  document.querySelector('.select__habilidades1').value = '';
  var habilidadesVisor = document.querySelectorAll('.card__foot--box');
  for (var i = 0; i < habilidadesVisor.length; i++) {
    habilidadesVisor[i].remove();
  }
  infoTarjeta = {
    'nombre': '',
    'puesto': '',
    'foto': '',
    'email': '',
    'telefono': '',
    'linkedin': '',
    'github': '',
    'habilidade1': '',
    'habilidade2': '',
    'habilidade3': '',
    'color': 'azul',
    'fuente': 'ubuntu'
  }

  localStorage.setItem('Profile-Card', JSON.stringify(infoTarjeta));

  // reset localstorage

  // quitar iconos
  for (var i = 0; i < iconBorderVisor.length; i++) {
    iconBorderVisor[i].style.display = 'none';
  }
  //quitar vlaores introducidos en el formulario

  for (var i = 0; i < formRemove.length; i++) {
    formRemove[i].value = '';
  }
}
resetButton.addEventListener('click', resetAll);