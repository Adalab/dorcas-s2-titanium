'use strict';

var nombreVisor = document.querySelector('.card__name--name');
var borderVisor = document.querySelector('.card__head--border');
var iconBorderVisor = document.querySelectorAll('.card__foot--icon');
var iconVisor = document.querySelectorAll('.iconsocial');
var fondoHabilidades = document.querySelector('.card__foot--box');
var colorVisor = document.querySelectorAll('.diseña__colores--paleta');
var fuenteVisor = document.querySelectorAll('.diseña__fuentes');


function cambiarColor(event) {
  if ( event.currentTarget.id === 'rojo' ){
    nombreVisor.classList.remove('gris');
    nombreVisor.classList.add('rojo');
    borderVisor.classList.remove('gris');
    borderVisor.classList.add('rojo');
    for (var e = 0; e < iconVisor.length; e++) {
      iconVisor[e].classList.remove('gris');
      iconVisor[e].classList.add('rojo');
    }
    for (var x = 0; x < fondoHabilidades.length; x++) {
      fondoHabilidades[x].classList.remove('gris');
      fondoHabilidades[x].classList.add('rojo');
    }
    for (var z = 0; z < iconBorderVisor.length; z++) {
      iconBorderVisor[z].classList.remove('gris');
      iconBorderVisor[z].classList.add('rojo');
    }
  } else if ( event.currentTarget.id === 'gris' ){
    nombreVisor.classList.remove('rojo');
    borderVisor.classList.remove('rojo');
    iconBorderVisor.classList.remove('rojo');
    iconVisor.classList.remove('rojo');
    fondoHabilidades.classList.remove('rojo');
    nombreVisor.classList.add('gris');
    borderVisor.classList.add('gris');
    iconBorderVisor.classList.add('gris');
    iconVisor.classList.add('gris');
    fondoHabilidades.classList.add('gris');
  } else {
    nombreVisor.classList.remove('rojo');
    borderVisor.classList.remove('rojo');
    iconBorderVisor.classList.remove('rojo');
    iconVisor.classList.remove('rojo');
    fondoHabilidades.classList.remove('rojo');
    nombreVisor.classList.remove('gris');
    borderVisor.classList.remove('gris');
    iconBorderVisor.classList.remove('gris');
    iconVisor.classList.remove('gris');
    fondoHabilidades.classList.remove('gris');
  }
}
// function cambiarFuente() {

// }

for (var i = 0; i < colorVisor.length; i++) {
  colorVisor[i].addEventListener('click', cambiarColor);
}
// for (var i = 0; i < fuenteVisor.length; i++) {
//   fuenteVisor[i].addEventListener('click', cambiarFuente);
// }
