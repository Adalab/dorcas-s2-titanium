"use strict";

const nombreVisor = document.querySelector(".card__name--name");
const borderVisor = document.querySelector(".card__head--border");
const iconBorderVisor = document.querySelectorAll(".card__foot--icon");
const iconVisor = document.querySelectorAll(".iconsocial");
const fondoHabilidades = document.querySelectorAll(".card__foot--box");
const colorVisor = document.querySelectorAll(".diseña__colores--paleta");
const borderVisorHead = document.querySelector(".card__foot--social");
const jobVisor = document.querySelector(".card__job--job");
const fuenteVisor = document.querySelectorAll(".diseña--fuentes");

const cambiarColor = event => {
  let colorTrigger;
  colorTrigger = event.currentTarget.id;
  console.log("cambiarColor disparada: " + colorTrigger);
  aplicarColor(colorTrigger);
  guardarColoresLS(colorTrigger);
};

for (const changeColor of colorVisor) {
  changeColor.addEventListener("click", cambiarColor);
}

const aplicarColor = disparador => {
  if (disparador === "rojo") {
    nombreVisor.classList.remove("gris");
    nombreVisor.classList.add("rojo");
    borderVisor.classList.remove("gris");
    borderVisor.classList.add("rojo");
    borderVisorHead.classList.remove("gris");
    borderVisorHead.classList.add("rojo");

    for (const changeIcon of iconVisor) {
      changeIcon.classList.remove("gris");
      changeIcon.classList.add("rojo");
    }

    for (const changeHabilidades of fondoHabilidades) {
      changeHabilidades.classList.remove("gris");
      changeHabilidades.classList.add("rojo");
    }

    for (const changeBorderVisor of iconBorderVisor) {
      changeBorderVisor.classList.remove("gris");
      changeBorderVisor.classList.add("rojo");
    }
  } else if (disparador === "gris") {
    nombreVisor.classList.remove("rojo");
    nombreVisor.classList.add("gris");
    borderVisor.classList.remove("rojo");
    borderVisor.classList.add("gris");
    borderVisorHead.classList.remove("rojo");
    borderVisorHead.classList.add("gris");

    for (const changeIcon2 of iconVisor) {
      changeIcon2.classList.remove("rojo");
      changeIcon2.classList.add("gris");
    }

    for (const changeHabilidades2 of fondoHabilidades) {
      changeHabilidades2.classList.remove("rojo");
      changeHabilidades2.classList.add("gris");
    }

    for (const changeIconBorder2 of iconBorderVisor) {
      changeIconBorder2.classList.remove("rojo");
      changeIconBorder2.classList.add("gris");
    }
  } else if (disparador === "azul") {
    nombreVisor.classList.remove("rojo", "gris");
    borderVisor.classList.remove("rojo", "gris");
    borderVisorHead.classList.remove("rojo", "gris");

    for (const changeIcon3 of iconVisor) {
      changeIcon3.classList.remove("rojo", "gris");
    }

    for (const changeHabilidades3 of fondoHabilidades) {
      changeHabilidades3.classList.remove("rojo", "gris");
    }

    for (const changeIconBorder3 of iconBorderVisor) {
      changeIconBorder3.classList.remove("rojo", "gris");
    }
  }
};


--------------------------- Hasta aquí Reina ----------------------- >


for (var x = 0; x < fuenteVisor.length; x++) {
  fuenteVisor[x].addEventListener("click", cambiarFuente);
}

function cambiarFuente(eventFuente) {
  let fuenteTrigger;
  fuenteTrigger = eventFuente.currentTarget.id;
  console.log("cambiarFuente disparada: " + fuenteTrigger);
  aplicarFuente(fuenteTrigger);
  guardarFuentesLS(fuenteTrigger);
}

function aplicarFuente(disparadorFuente) {
  if (disparadorFuente === "ubuntu") {
    nombreVisor.classList.remove("montserrat");
    nombreVisor.classList.add("ubuntu");
    jobVisor.classList.remove("montserrat");
    jobVisor.classList.add("ubuntu");
  } else if (disparadorFuente === "montserrat") {
    nombreVisor.classList.remove("ubuntu");
    nombreVisor.classList.add("montserrat");
    jobVisor.classList.remove("ubuntu");
    jobVisor.classList.add("montserrat");
  } else if (disparadorFuente === "comicsans") {
    jobVisor.classList.remove("ubuntu");
    jobVisor.classList.remove("montserrat");
    nombreVisor.classList.remove("ubuntu");
    nombreVisor.classList.remove("montserrat");
  }
}
