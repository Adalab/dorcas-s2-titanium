'use strict';

const nameField = document.querySelector('.fieldset--name');
const roleField = document.querySelector('.fieldset--role');

function writeData(event){
  var guiltyElement = event.currentTarget;
  var targetID = guiltyElement.getAttribute('data-donde');
  document.querySelector('#' + targetID).innerHTML = guiltyElement.value;
}
nameField.addEventListener('keyup', writeData);
roleField.addEventListener('keyup', writeData);
