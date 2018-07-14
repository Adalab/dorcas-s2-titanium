'use strict';
/* global nameField roleField profileImage inputEmail inputTelefono inputLinkedin inputGithub miniBox fotoURL */

// Funciones localstorage

var infoTarjeta = {};


// -------------------- addEventListeners para los input, para guardar el texto en LS
nameField.addEventListener('focusout', guardarDataLS);
roleField.addEventListener('focusout', guardarDataLS);
inputEmail.addEventListener('focusout', guardarDataLS);
inputTelefono.addEventListener('focusout', guardarDataLS);
inputLinkedin.addEventListener('focusout', guardarDataLS);
inputGithub.addEventListener('focusout', guardarDataLS);

function guardarDataL(ev) {
  console.log('Leaving: ' + ev.currentTarget.name);
}

function guardarDataLS() {

  if (!localStorage.getItem('Profile-Card')) {
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
      'color': '',
      'fuente': ''
    }

  } else {
    infoTarjeta = JSON.parse(localStorage.getItem('Profile-Card'));
  }
  infoTarjeta.nombre = nameField.value;
  infoTarjeta.puesto = roleField.value;
  infoTarjeta.foto = fotoURL;
  infoTarjeta.email = inputEmail.value;
  infoTarjeta.telefono = inputTelefono.value;
  infoTarjeta.linkedin = inputLinkedin.value;
  infoTarjeta.github = inputGithub.value;
  infoTarjeta.habilidade1 = null
  infoTarjeta.habilidade2 = null
  infoTarjeta.habilidade3 = null
  infoTarjeta.color = null
  infoTarjeta.fuente = null

  localStorage.setItem('Profile-Card', JSON.stringify(infoTarjeta));
}

function recuperarDataLS() {
  if (localStorage.getItem('Profile-Card')) {
    infoTarjeta = JSON.parse(localStorage.getItem('Profile-Card'));
    nameField.value = infoTarjeta.nombre;
    roleField.value = infoTarjeta.puesto;
    profileImage.style.backgroundImage = infoTarjeta.foto;
    miniBox.style.backgroundImage = infoTarjeta.foto;
    profileImage.value = infoTarjeta.foto;
    inputEmail.value = infoTarjeta.email;
    inputTelefono.value = infoTarjeta.telefono;
    inputLinkedin.value = infoTarjeta.linkedin;
    inputGithub.value = infoTarjeta.github;
  }
}

// -------------- Se ejecuta al iniciar la página
recuperarDataLS()