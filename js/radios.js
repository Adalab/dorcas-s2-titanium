"use strict";

const NOMBREVISOR = document.querySelector(".card__name--name");
const BORDERVISOR = document.querySelector(".card__head--border");
const ICONBORDERVISOR = document.querySelectorAll(".card__foot--icon");
const ICONVISOR = document.querySelectorAll(".iconsocial");
const FONDOHABILIDADES = document.querySelectorAll(".card__foot--box");
const COLORVISOR = document.querySelectorAll(".diseña__colores--paleta");
const BORDERVISORHEAD = document.querySelector(".card__foot--social");
const JOBVISOR = document.querySelector(".card__job--job");
const FUENTEVISOR = document.querySelectorAll(".diseña--fuentes");

const cambiarColor = event => {
  let colorTrigger;
  colorTrigger = event.currentTarget.id;
  console.log("cambiarColor disparada: " + colorTrigger);
  aplicarColor(colorTrigger);
  guardarColoresLS(colorTrigger);
};

for (const changeColor of COLORVISOR) {
  changeColor.addEventListener("click", cambiarColor);
}

const aplicarColor = disparador => {
  if (disparador === "rojo") {
    NOMBREVISOR.classList.remove("gris");
    NOMBREVISOR.classList.add("rojo");
    BORDERVISOR.classList.remove("gris");
    BORDERVISOR.classList.add("rojo");
    BORDERVISORHEAD.classList.remove("gris");
    BORDERVISORHEAD.classList.add("rojo");

    for (const changeIcon of ICONVISOR) {
      changeIcon.classList.remove("gris");
      changeIcon.classList.add("rojo");
    }

    for (const changeHabilidades of FONDOHABILIDADES) {
      changeHabilidades.classList.remove("gris");
      changeHabilidades.classList.add("rojo");
    }

    for (const changeBorderVisor of ICONBORDERVISOR) {
      changeBorderVisor.classList.remove("gris");
      changeBorderVisor.classList.add("rojo");
    }
  } else if (disparador === "gris") {
    NOMBREVISOR.classList.remove("rojo");
    NOMBREVISOR.classList.add("gris");
    BORDERVISOR.classList.remove("rojo");
    BORDERVISOR.classList.add("gris");
    BORDERVISORHEAD.classList.remove("rojo");
    BORDERVISORHEAD.classList.add("gris");

    for (const changeIcon2 of ICONVISOR) {
      changeIcon2.classList.remove("rojo");
      changeIcon2.classList.add("gris");
    }

    for (const changeHabilidades2 of FONDOHABILIDADES) {
      changeHabilidades2.classList.remove("rojo");
      changeHabilidades2.classList.add("gris");
    }

    for (const changeIconBorder2 of ICONBORDERVISOR) {
      changeIconBorder2.classList.remove("rojo");
      changeIconBorder2.classList.add("gris");
    }
  } else if (disparador === "azul") {
    NOMBREVISOR.classList.remove("rojo", "gris");
    BORDERVISOR.classList.remove("rojo", "gris");
    BORDERVISORHEAD.classList.remove("rojo", "gris");

    for (const changeIcon3 of ICONVISOR) {
      changeIcon3.classList.remove("rojo", "gris");
    }

    for (const changeHabilidades3 of FONDOHABILIDADES) {
      changeHabilidades3.classList.remove("rojo", "gris");
    }

    for (const changeIconBorder3 of ICONBORDERVISOR) {
      changeIconBorder3.classList.remove("rojo", "gris");
    }
  }
};

const cambiarFuente = eventFuente => {
  let fuenteTrigger;
  fuenteTrigger = eventFuente.currentTarget.id;
  console.log("cambiarFuente disparada: " + fuenteTrigger);
  aplicarFuente(fuenteTrigger);
  guardarFuentesLS(fuenteTrigger);
};

for (const changeFont of FUENTEVISOR) {
  changeFont.addEventListener("click", cambiarFuente);
}

const aplicarFuente = disparadorFuente => {
  if (disparadorFuente === "ubuntu") {
    NOMBREVISOR.classList.remove("montserrat");
    NOMBREVISOR.classList.add("ubuntu");
    JOBVISOR.classList.remove("montserrat");
    JOBVISOR.classList.add("ubuntu");
  } else if (disparadorFuente === "montserrat") {
    NOMBREVISOR.classList.remove("ubuntu");
    NOMBREVISOR.classList.add("montserrat");
    JOBVISOR.classList.remove("ubuntu");
    JOBVISOR.classList.add("montserrat");
  } else if (disparadorFuente === "comicsans") {
    JOBVISOR.classList.remove("ubuntu");
    JOBVISOR.classList.remove("montserrat");
    NOMBREVISOR.classList.remove("ubuntu");
    NOMBREVISOR.classList.remove("montserrat");
  }
};
