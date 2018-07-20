'use strict';

const NAMEFIELD = document.querySelector('.fieldset--name');
const ROLEFIELD = document.querySelector('.fieldset--role');

const writeData = event => {
  var guiltyElement = event.currentTarget;
  var targetID = guiltyElement.getAttribute('data-donde');
  document.querySelector('#' + targetID).innerHTML = guiltyElement.value;
};
NAMEFIELD.addEventListener('keyup', writeData);
ROLEFIELD.addEventListener('keyup', writeData);
