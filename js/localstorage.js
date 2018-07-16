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

function guardarFuentesLS(idFuentes) {
  console.log(idFuentes);
  fuenteSeleccionada = idFuentes;
  guardarDataLS();
}

function guardarColoresLS(disparadorFuente) {
  colorSeleccionado = disparadorFuente;
  guardarDataLS();
}


function recuperarDataLS() {
  if (localStorage.getItem('Profile-Card')) {
    infoTarjeta = JSON.parse(localStorage.getItem('Profile-Card'));

    if (infoTarjeta.color) {
      document.querySelector('#' + infoTarjeta.color).checked = true;
      aplicarColor(infoTarjeta.color);
    }
    if (infoTarjeta.fuente) {
      document.querySelector('#' + infoTarjeta.fuente).checked = true;
      aplicarFuente(infoTarjeta.fuente);
    }


    nameField.value = infoTarjeta.nombre;
    nombreVisor.innerHTML = infoTarjeta.nombre;
    roleField.value = infoTarjeta.puesto;
    jobVisor.innerHTML = infoTarjeta.puesto;
    profileImage.style.backgroundImage = infoTarjeta.foto;
    miniBox.style.backgroundImage = infoTarjeta.foto;
    profileImage.value = infoTarjeta.foto;
    inputEmail.value = infoTarjeta.email;
    inputTelefono.value = infoTarjeta.telefono;
    inputLinkedin.value = infoTarjeta.linkedin;
    inputGithub.value = infoTarjeta.github;


    if (inputEmail.value !== '') {
      emailLink.href = 'mailto:' + inputEmail.value;
      document.querySelector('.email').style.display = 'flex';
    }

    if (inputTelefono.value !== '') {
      mobileLink.href = 'tel:' + inputTelefono.value;
      document.querySelector('.mobile').style.display = 'flex';
    }

    if (inputLinkedin.value !== '') {
      inputLinkedin.href = 'http://linkedin.com/in/' + inputLinkedin.value;
      document.querySelector('.linkedin').style.display = 'flex';
    }

    if (inputGithub.value !== '') {
      inputGithub.href = 'https://github.com/' + inputGithub.value;
      document.querySelector('.github').style.display = 'flex';
    }



    loadSelect();
    setTimeout(determineSelectsValuesOnRecoverData, 2000);
    // setTimeout(function() {
    //   document.querySelector('#' + infoTarjeta.fuente).click();
    // }, 2000);
    // setTimeout(function() {
    //   document.querySelector('#' + infoTarjeta.color).click();
    // }, 2000);

  } else {
    loadSelect();
  }
}

function determineSelectsValuesOnRecoverData() {
  if (infoTarjeta.habilidade1.indexOf(habilidades)) {
    guilty = document.querySelector('.select__habilidades1');
    guilty.value = infoTarjeta.habilidade1;
    guilty.classList.add('select__habilidades-active');
    habilidades2Visor()
  }
  if (infoTarjeta.habilidade2.indexOf(habilidades)) {
    createSelect();
    guilty = document.querySelector('.select__habilidades2');
    guilty.value = infoTarjeta.habilidade2;
    guilty.classList.add('select__habilidades-active');
    habilidades2Visor()
  }
  if (infoTarjeta.habilidade3.indexOf(habilidades)) {
    createSelect();
    guilty = document.querySelector('.select__habilidades3');
    guilty.value = infoTarjeta.habilidade3;
    guilty.classList.add('select__habilidades-active');
    habilidades2Visor()
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