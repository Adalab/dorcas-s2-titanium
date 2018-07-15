'use strict';
/* global nameField roleField profileImage inputEmail inputTelefono inputLinkedin inputGithub miniBox fotoURL */

// Funciones localstorage

var infoTarjeta = {};
var habilidade1LocalStorage;
var habilidade2LocalStorage;
var habilidade3LocalStorage;

function verifySelectValues() {
  infoTarjeta = JSON.parse(localStorage.getItem('Profile-Card'));
  if (infoTarjeta.habilidade1) {
    habilidade1LocalStorage = infoTarjeta.habilidade1;
  } else {
    habilidade1LocalStorage = '';
  }
  if (infoTarjeta.habilidade2) {
    habilidade2LocalStorage = infoTarjeta.habilidade2;
  } else {
    habilidade2LocalStorage = '';
  }
  if (infoTarjeta.habilidade3) {
    habilidade3LocalStorage = infoTarjeta.habilidade3;
  } else {
    habilidade3LocalStorage = '';
  }


}
// var habilidade2 = document.querySelector('.select__habilidades2');
// var habilidade3 = document.querySelector('.select__habilidades3');



// -------------------- addEventListeners para los input, para guardar el texto en LS
nameField.addEventListener('focusout', guardarDataLS);
roleField.addEventListener('focusout', guardarDataLS);
inputEmail.addEventListener('focusout', guardarDataLS);
inputTelefono.addEventListener('focusout', guardarDataLS);
inputLinkedin.addEventListener('focusout', guardarDataLS);
inputGithub.addEventListener('focusout', guardarDataLS);

function guardarDataLSSelect(event) {

  var guilty = event.currentTarget;

  if (guilty.name === 'Habilidade1') {
    habilidade1LocalStorage = guilty.value;
    console.log(guilty.name + guilty.value);

  } else if (guilty.name === 'Habilidade2') {

    habilidade2LocalStorage = guilty.value;

  } else if (guilty.name === 'Habilidade3') {
    habilidade3LocalStorage = guilty.value;
  }

  guardarDataLS()
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
  infoTarjeta.habilidade1 = habilidade1LocalStorage;
  infoTarjeta.habilidade2 = habilidade2LocalStorage;
  infoTarjeta.habilidade3 = habilidade3LocalStorage;
  infoTarjeta.color = null
  infoTarjeta.fuente = null

  localStorage.setItem('Profile-Card', JSON.stringify(infoTarjeta));
}

function recuperarDataLS() {
  if (localStorage.getItem('Profile-Card')) {
    infoTarjeta = JSON.parse(localStorage.getItem('Profile-Card'));
    verifySelectValues()
    nameField.value = infoTarjeta.nombre;
    roleField.value = infoTarjeta.puesto;
    profileImage.style.backgroundImage = infoTarjeta.foto;
    miniBox.style.backgroundImage = infoTarjeta.foto;
    profileImage.value = infoTarjeta.foto;
    inputEmail.value = infoTarjeta.email;
    inputTelefono.value = infoTarjeta.telefono;
    inputLinkedin.value = infoTarjeta.linkedin;
    inputGithub.value = infoTarjeta.github;

    loadSelect();
    setTimeout(determineSelectsValuesOnRecoverData, 1000);

  } else {
    loadSelect();
  }
}

function determineSelectsValuesOnRecoverData() {
  if (infoTarjeta.habilidade1 !== '') {
    console.log(infoTarjeta.habilidade1);
    document.querySelector('.select__habilidades1').value = infoTarjeta.habilidade1;
  }
  if (infoTarjeta.habilidade2 !== '') {
    createSelect(); // problema con ese segundo createSelect(). El event change de habilidad1 se lía
    console.log(infoTarjeta.habilidade2);
    document.querySelector('.select__habilidades2').value = infoTarjeta.habilidade2;
  }
  if (infoTarjeta.habilidade3 !== '') {
    createSelect();
    console.log(infoTarjeta.habilidade3);
    document.querySelector('.select__habilidades3').value = infoTarjeta.habilidade3;
  }

}

// -------------- Se ejecuta al iniciar la página
recuperarDataLS()