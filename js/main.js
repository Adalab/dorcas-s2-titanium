"use strict";

//colapsables

// var collapsibles = document.querySelectorAll(".collapsible");
// var contenido = document.querySelectorAll(".collapsible__content");

var collapsibleTriggers = document.querySelectorAll(".collapsible__label");
console.log(collapsibleTriggers);


for (var i = 0; i < collapsibleTriggers.length; i++) {
  console.log(collapsibleTriggers[i]);
  collapsibleTriggers[i].addEventListener("click", updateCollapsibles);
}

function updateCollapsibles(event) {
  // var move = document.querySelector(".fieldset__rellena--arrow");
  for (var i = 0; i < collapsibleTriggers.length; i++) {

    collapsibleTriggers[i].parentElement.classList.add("fieldset--invisible");
  }
  var madre = event.currentTarget.parentElement;
  madre.classList.toggle("fieldset--invisible");
  console.log(event);
}

/*Generar tarjeta*/

var submitButton = document.querySelector('#submit');
var responseURL = document.querySelector('.response');
var form = document.querySelector('.formulario');
var fr = new FileReader();
submitButton.addEventListener('click', loadPhoto);
function sendData(){
  var inputs = Array.from(form.elements); /*aquí cambiar lo de elements por la clase que tengan los items que contiene formulario*/
  var json = getJSONFromInputs(inputs);
  json.skills = ['Javascript', 'React'];
  json.photo = fr.result; /* lo de photo hay que referenciarlo. ¿Qué clase o id tiene la foto una vez que se sube?*/
  sendRequest(json);
}
function getJSONFromInputs(json){
  fetch('https://us-centrall-awesome-cards-cf6f0.cloudfunctions.net/card/',{
    method: 'POST',
    body: JSON.stringify(json),
    headers:{
      'content-type': 'application/json'
    },
  })
    .then(function(resp){return resp.json(); })
    .then(function(result){showURL(result); })
    .catch(function(error){console.log(error); })
}
function showURL(result){
  if(result === null){
    responseURL.innerHTML = 'ERROR:' + result.error;
  } else {
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  } /*Aquí cambié la función, poniendo ===null en el if y en el else lo que antes estaba arriba, en lugar de poner en el if la condición de certeza*/
}

// Habilidades
var userSelections = [];
var divPadre;
var selecPadre;

function contenidoHTML() {
  var divSelectPadre = document.querySelector('.selecthab');

  //Declaraciones de variables de select y su contenido
  var selecPadreNuevo = document.createElement('div');
  var selecNuevo = document.createElement('select');
  var opcioNueva = document.createElement('option');
  var opcionContenido = document.createTextNode('HTML');

  //Declaraciones variables boton más div que lo contiene

  var nuevoBotonSelec = document.createElement('div');
  var nuevoBotonContenidoSelec = document.createElement('i');

  //Bucle que recorre el array de userSelections (+ 1 para que aparezca 1 ya pintado al cargar la página) y añade los grupos de contenido
  for (var i = 0; i < userSelections.length + 1; i++) {
    //Insercion contenido en option, e insercion de option como contenido de select. Insercion de select dentro del div que es su padre
    opcioNueva.appendChild(opcionContenido);
    selecNuevo.appendChild(opcioNueva);
    selecPadreNuevo.appendChild(selecNuevo);
    divSelectPadr.appendChild(selecPadreNuevo);

    selecPadreNuevo.classList.add('contenedorSelec');
    selecNuevo.classList.add('seleccionOpcion');
    opcioNueva.classList.add('opcionJS');

    //Insercion clase font-awesome en <i>, insercion <i> en <div>
    nuevoBotonContenidoSelect.classList.add('fas');
    nuevoBotonContenidoSelec.classList.add('fa-plus');
    nuevoBotonContenidoSelec.classList.add('anadirJS');
    nuevoBotonSelec.appendChild(nuevoBotonContenidoSelec);
    nuevoBotonSelec.classList.add('BotonSelecOpcion');
    selecPadreNuevo.appendChild(nuevoBotonSelec);
  }

  cambiarBoton();
}

//función para cambiar el signo del botón dependiendo de las seleciones del usuario
function cambiarBoton() {
  var button = document.querySelectorAll('.anadirJS');
  for (var i = 0; i < button.length; i++) {
    console.log('i = ' + i);

    if (userSelections.length === i) {
      button[i].classList.add('fa-plus');
      button[i].removeEventListener('click', removeSelect);
      button[i].addEventListener('click', addSelect);
    } else {
      button[i].classList.remove('fa-plus');
      button[i].classList.add('fa-minus');
      button[i].removeEventListener('click', addSelect);
      button[i].addEventListener('click', removeSelect);
    }
  }
  conectSelectWithCard();
}

//Llamada a la función que crea el contenido la primera vez
contenidoHTML();

//Función para añadir el contenido (hasta que las selecciones del usuario sean 3) y cambiar el signo del último botón
function addSelect(event) {
  console.log('estoy poniendo');
  var clickedElement = event.currentTarget;
  userSelections.push('option');
  console.log(userSelections);
  if (userSelections.length < 3) {
    contenidoHTML();
  } else if (userSelections.length === 3) {
    cambiarBoton();
  }
}

//Función para quitar el contenido (de momento sólo quita el primer campo no el correspondiente al botón que se pincha)
function removeSelect() {
  console.log('estoy quitando');
  divPadre = document.querySelector('.selecthab');
  selecPadre = document.querySelector('.contenedorSelec');
  userSelections.splice(0, 1);
  console.log(userSelections);
  if (userSelections.length === 2) {
    cambiarBoton();
  } else if (userSelections.length === 1) {
    divPadre.removeChild(selecPadre);
    cambiarBoton();
  } else if (userSelections.length === 0) {
    divPadre.removeChild(selecPadre);
    cambiarBoton();
  }
}
