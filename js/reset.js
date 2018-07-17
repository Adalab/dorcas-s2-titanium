'use strict';
/* global jobVisor iconBorderVisor profileImage miniBox nombreVisor borderVisor nombreVisor fieldsetSelects fondoHabilidades borderVisorHead */

var resetButton = document.querySelector('.reset');
var formRemove = document.querySelectorAll('.fieldset__rellena--input');

function resetAll() {
  //reset color
  borderVisor.classList.remove('rojo');
  borderVisor.classList.remove('gris');
  nombreVisor.classList.remove('rojo');
  nombreVisor.classList.remove('gris');
  borderVisorHead.classList.remove('rojo');
  borderVisorHead.classList.remove('gris');
  for (var e = 0; e < fondoHabilidades.length; e++) {
    fondoHabilidades[e].classList.remove('rojo');
    fondoHabilidades[e].classList.remove('gris');
  }
  // //reset fuentes
  nombreVisor.classList.remove('ubuntu');
  nombreVisor.classList.remove('montserrat');
  jobVisor.classList.remove('ubuntu');
  jobVisor.classList.remove('montserrat');
  // reset nombre y role
  nombreVisor.innerHTML = 'Nombre Apellido';
  jobVisor.innerHTML = 'Front-end developer';

  //reset pic
  profileImage.style.backgroundImage = '';
  miniBox.style.backgroundImage = '';

  // quitar iconos
  for (var i = 0; i < iconBorderVisor.length; i++) {
    iconBorderVisor[i].style.display = 'none';
  }
  //quitar valores introducidos en el formulario

  for (var i = 0; i < formRemove.length; i++) {
    formRemove[i].value = '';
  }
}

//reset habilidades


resetButton.addEventListener('click', resetAll);
