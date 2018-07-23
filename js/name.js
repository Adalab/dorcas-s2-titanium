'use strict';

const NAMEFIELD = document.querySelector('.fieldset--name');
const ROLEFIELD = document.querySelector('.fieldset--role');

const writeData = event => {
  const GUILTYELEMENT = event.currentTarget;
  const TARGETID = GUILTYELEMENT.getAttribute('data-donde');
  document.querySelector(`#${TARGETID}`).innerHTML = GUILTYELEMENT.value;
};
NAMEFIELD.addEventListener('keyup', writeData);
ROLEFIELD.addEventListener('keyup', writeData);
