'use strict';

var nombreVisor = document.querySelector('.card__name--name');
var borderVisor = document.querySelector('.card__head--border');
var iconBorderVisor = document.querySelectorAll('.card__foot--icon');
var iconVisor = document.querySelectorAll('.iconsocial');
var fondoHabilidades = document.querySelectorAll('.card__foot--box');
var colorVisor = document.querySelectorAll('.diseña__colores--paleta');
var borderVisorHead = document.querySelector('.card__foot--social');
var jobVisor = document.querySelector('.card__job--job');
var fuenteVisor = document.querySelectorAll('.diseña--radio');
var colorTrigger;
var fuenteTrigger;

for (var i = 0; i < colorVisor.length; i++) {
  colorVisor[i].addEventListener('click', cambiarColor);
}

function cambiarColor(event) {
  colorTrigger = event.currentTarget.id;
  console.log('cambiarColor disparada: ' + colorTrigger);
  aplicarColor(colorTrigger);
}

function aplicarColor(disparador) {
  guardarColoresLS(colorTrigger);
  if (colorTrigger === 'rojo') {
    nombreVisor.classList.remove('gris');
    nombreVisor.classList.add('rojo');
    borderVisor.classList.remove('gris');
    borderVisor.classList.add('rojo');
    borderVisorHead.classList.remove('gris');
    borderVisorHead.classList.add('rojo');

    for (var e = 0; e < iconVisor.length; e++) {
      iconVisor[e].classList.remove('gris');
      iconVisor[e].classList.add('rojo');
    }

    for (var w = 0; w < fondoHabilidades.length; w++) {
      fondoHabilidades[w].classList.remove('gris');
      fondoHabilidades[w].classList.add('rojo');
    }

    for (var z = 0; z < iconBorderVisor.length; z++) {
      iconBorderVisor[z].classList.remove('gris');
      iconBorderVisor[z].classList.add('rojo');
    }

  } else if (colorTrigger === 'gris') {
    nombreVisor.classList.remove('rojo');
    nombreVisor.classList.add('gris');
    borderVisor.classList.remove('rojo');
    borderVisor.classList.add('gris');
    borderVisorHead.classList.remove('rojo');
    borderVisorHead.classList.add('gris');

    for (var e = 0; e < iconVisor.length; e++) {
      iconVisor[e].classList.remove('rojo');
      iconVisor[e].classList.add('gris');
    }

    for (var w = 0; w < fondoHabilidades.length; w++) {
      fondoHabilidades[w].classList.remove('rojo');
      fondoHabilidades[w].classList.add('gris');
    }

    for (var z = 0; z < iconBorderVisor.length; z++) {
      iconBorderVisor[z].classList.remove('rojo');
      iconBorderVisor[z].classList.add('gris');
    }

  } else if (colorTrigger === 'azul') {
    nombreVisor.classList.remove('rojo', 'gris');
    borderVisor.classList.remove('rojo', 'gris');
    borderVisorHead.classList.remove('rojo', 'gris');

    for (var e = 0; e < iconVisor.length; e++) {
      iconVisor[e].classList.remove('rojo', 'gris');
    }

    for (var w = 0; w < fondoHabilidades.length; w++) {
      fondoHabilidades[w].classList.remove('rojo', 'gris');
    }

    for (var z = 0; z < iconBorderVisor.length; z++) {
      iconBorderVisor[z].classList.remove('rojo', 'gris');
    }
  }
}

for (var x = 0; x < fuenteVisor.length; x++) {
  fuenteVisor[x].addEventListener('click', cambiarFuente);
}

function cambiarFuente(eventFuente) {
  fuenteTrigger = eventFuente.currentTarget.id;
  console.log('cambiarFuente disparada: ' + fuenteTrigger);
  aplicarFuente(fuenteTrigger);
}

function aplicarFuente(disparador) {
  guardarFuentesLS(fuenteTrigger);
  if (fuenteTrigger === 'ubuntu') {
    nombreVisor.classList.remove('montserrat');
    nombreVisor.classList.add('ubuntu');
    jobVisor.classList.remove('montserrat');
    jobVisor.classList.add('ubuntu');
  } else if (fuenteTrigger === 'montserrat') {
    nombreVisor.classList.remove('ubuntu');
    nombreVisor.classList.add('montserrat');
    jobVisor.classList.remove('ubuntu');
    jobVisor.classList.add('montserrat');
  } else if (fuenteTrigger === 'comicsans') {
    jobVisor.classList.remove('ubuntu');
    jobVisor.classList.remove('montserrat');
    nombreVisor.classList.remove('ubuntu');
    nombreVisor.classList.remove('montserrat');
  }
}