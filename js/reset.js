"use strict";
/* global jobVisor iconBorderVisor profileImage miniBox nombreVisor */

const resetButton = document.querySelector(".reset");
const formRemove = document.querySelectorAll(".fieldset__rellena--input");
// var colorRemove = document.querySelector('#')
const resetAll = () => {
  // // paleta reset
  // card.classList.remove('paleta-azul', 'paleta-roja', 'paleta-gris');
  // card.classList.add('paleta-azul');
  // // font reset
  // cardInfo.classList.remove('font-card--comicsans', 'font-card--ubuntu', 'font-card--montserrat');
  // cardInfo.classList.add('font-card--comicsans');

  // reset nombre y role
  nombreVisor.innerHTML = "Nombre Apellido";
  jobVisor.innerHTML = "Descripcion";

  //reset pic
  profileImage.style.backgroundImage = "url(../images/pollito.png)";
  miniBox.style.backgroundImage = "url(../images/pollito.png)";

  // quitar iconos
  for (const ocult of iconBorderVisor) {
    ocult.style.display = "none";
  }
  //quitar valores introducidos en el formulario

  for (const ocult2 of formRemove) {
    ocult2.value = "";
  }
};
resetButton.addEventListener("click", resetAll);
