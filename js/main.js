'use strict';

var maxHabilidades = 3;
var numActualHabilidades = 1;
var habilidades = [];
var optionHabilidades = document.querySelector('.select__habilidades');
var buttonAddSelect = document.querySelector('.button__add-select');
buttonAddSelect.addEventListener('click', createSelect);
var fieldsetSelects = document.querySelector('.fieldset__div--habilidades-new');
var currentSelect;


function loadSelect() {
  fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(function(listado) {

      return listado.json();
    })
    .then(function(listadoJSON) {

      habilidades = listadoJSON.skills;
      habilidades2options()
    });
}

function habilidades2options() {
  var optionElement;
  var optionText;
  var selectHabilidades = document.querySelectorAll('.select__habilidades');

  for (var j = 0; j < selectHabilidades.length; j++) {

    currentSelect = selectHabilidades[j];

    for (var i = 0; i < habilidades.length; i++) {
      optionElement = document.createElement('option');
      optionElement.value = habilidades[i];
      optionText = document.createTextNode(habilidades[i]);
      optionElement.appendChild(optionText);

      currentSelect.appendChild(optionElement);
    }
    var currentSelectNumber = j + 1;
    currentSelect.name = 'Habilidade' + currentSelectNumber;

    if (currentSelect.getAttribute('data-eventlistener') !== 'true') {

      currentSelect.addEventListener('change', guardarDataLSSelect); // para localStorage
      currentSelect.setAttribute('data-eventlistener', true);
    }
  }
}

function createSelect() {

  if (numActualHabilidades === maxHabilidades) {
    return false;
  } else {
    numActualHabilidades++;

    var createSelectDiv = document.createElement('div');
    createSelectDiv.classList.add('div__habilidades');
    var createSelectSelect = document.createElement('select');
    createSelectSelect.classList.add('select__habilidades', 'select__habilidades' + numActualHabilidades);

    var createSelectDivIcon = document.createElement('div');
    createSelectDivIcon.classList.add('button__add-select--container');
    var createSelectIcon = document.createElement('i');

    createSelectIcon.classList.add('fas', 'fa-plus', 'button__add-select', 'button__add-select' + numActualHabilidades);

    createSelectDivIcon.appendChild(createSelectIcon);
    createSelectDiv.append(createSelectSelect, createSelectDivIcon);

    fieldsetSelects.appendChild(createSelectDiv);

    habilidades2options();

    addButtonsEvents();
  }
}

function addButtonsEvents() {

  var buttonsAddSelect = document.querySelectorAll('.button__add-select');

  for (var w = 0; w < buttonsAddSelect.length; w++) {

    var buttonRemove = numActualHabilidades - 1;

    buttonsAddSelect[w].removeEventListener('click', createSelect);
    buttonsAddSelect[w].removeEventListener('click', removeSelect);
    buttonsAddSelect[w].parentElement.classList.remove('hide');


    if (buttonsAddSelect[w].classList.contains('button__add-select' + buttonRemove)) {
      buttonsAddSelect[w].classList.remove('fa-plus');
      buttonsAddSelect[w].classList.add('fa-minus');
      buttonsAddSelect[w].addEventListener('click', removeSelect);
    } else {
      if (numActualHabilidades === 3 && buttonsAddSelect[w].classList.contains('button__add-select1')) {
        buttonsAddSelect[w].parentElement.classList.add('hide');
      } else {
        buttonsAddSelect[w].addEventListener('click', createSelect);
        buttonsAddSelect[w].classList.add('fa-plus');
        buttonsAddSelect[w].classList.remove('fa-minus');
      }
    }
  }
}


function removeSelect() {

  numActualHabilidades--;
  fieldsetSelects.lastChild.remove();
  if (numActualHabilidades === 2) {
    habilidade3LocalStorage = '';
  } else if (numActualHabilidades === 1) {
    habilidade2LocalStorage = '';
  }
  guardarDataLS()
  addButtonsEvents()
}

// loadSelect();