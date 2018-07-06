'use strict';

var nameField = document.querySelector('.fieldset--name');
var roleField = document.querySelector('.fieldset--role');

function writeData(event){
  var guiltyElement = event.currenTarget;
  var targetID = guiltyElement.getAttribute('data-donde');
  document.querySelector('#' + targetID).innerHTML = guiltyElement.value;
}
nameField.addEventListener('keyup', writeData);
roleField.addEventListener('keyup', writeData);