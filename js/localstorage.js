'use strict';
/* global nameField roleField profileImage inputEmail inputTelefono inputLinkedin inputGithub miniBox fotoURL */

// Funciones localstorage


var infoTarjeta = {};

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

    // document.querySelector('#' + infoTarjeta.color).checked = true;
    // aplicarColor(infoTarjeta.color);

    // document.querySelector('#' + infoTarjeta.fuente).checked = true;
    // aplicarFuente(infoTarjeta.fuente);

    //
    // document.querySelector('#' + JSON.parse(localStorage.getItem('Profile-Card')).color).checked = true;
    // aplicarColor(JSON.parse(localStorage.getItem('Profile-Card')).color);
    //
    // document.querySelector('#' + JSON.parse(localStorage.getItem('Profile-Card')).fuente).checked = true;
    // aplicarFuente(JSON.parse(localStorage.getItem('Profile-Card')).fuente);

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
recuperarDataLS();



// -------------- Generar tarjeta para exportación

var obj2Export = {
  "palette": 0,
  "typography": 0,
  "name": '',
  "job": '',
  "phone": '',
  "email": '',
  "linkedin": '',
  "github": '',
  "photo": '',
  "skills": []
}

function do2Export() {
  var palette;
  var typography;

  infoTarjeta = JSON.parse(localStorage.getItem('Profile-Card'));

  if (infoTarjeta.color === 'azul') {
    palette = 1;
  } else if (infoTarjeta.color === 'rojo') {
    palette = 2;
  } else if (infoTarjeta.color === 'gris') {
    palette = 3;
  }

  if (infoTarjeta.fuente === 'ubuntu') {
    typography = 1;
  } else if (infoTarjeta.fuente === 'comicsans') {
    typography = 2;
  } else if (infoTarjeta.fuente === 'montserrat') {
    typography = 3;
  }


  obj2Export.palette = palette;
  obj2Export.typography = typography;
  obj2Export.name = infoTarjeta.nombre;
  obj2Export.job = infoTarjeta.puesto;
  obj2Export.phone = infoTarjeta.telefono;
  obj2Export.email = infoTarjeta.email;
  obj2Export.linkedin = infoTarjeta.linkedin;
  obj2Export.github = infoTarjeta.github;
  obj2Export.photo = infoTarjeta.foto;
  obj2Export.skills.splice(0);
  obj2Export.skills.push(infoTarjeta.habilidade1);
  obj2Export.skills.push(infoTarjeta.habilidade2);
  obj2Export.skills.push(infoTarjeta.habilidade3);

  console.log('Objecto preparado para ser exportado:');
  console.log(obj2Export);

}
