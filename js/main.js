"use strict";

// var arrow = document.querySelector('.fieldset__rellena--arrow');

// arrow.addEventListener('click', teste);

// function teste() {
//   alert('Activa alguna función en JavaScript');
// }

//colapsables

var collapsibles = document.querySelectorAll(".collapsible");
var contenido = document.querySelectorAll(".collapsible__content");

var collapsibleTriggers = document.querySelectorAll(".collapsible__label");
console.log(collapsibleTriggers);


for (var i = 0; i < collapsibleTriggers.length; i++) {
  console.log(collapsibleTriggers[i]);
  collapsibleTriggers[i].addEventListener("click", updateCollapsibles);
}
function updateCollapsibles(event) {
  for (var i = 0; i < collapsibleTriggers.length; i++) {
    collapsibleTriggers[i].parentElement.classList.add("fieldset--invisible");
  }
  var madre = event.currentTarget.parentElement;
  madre.classList.toggle("fieldset--invisible");
  console.log(event);
}

// function updateCollapsibles(e) {
//   var parent = e.currentTarget.parentElement;

//   if (parent.classList.contains('collapsible--visible')) {
//     parent.classList.remove('collapsible--visible');
//   } else {
//     closeAllCollapsibles();
//     parent.classList.add('collapsible--visible');
//   }
//   console.log (updateCollapsibles);
// }

// function closeAllCollapsibles() {
//   for (var i = 0; i < collapsibles.length; i++) {
//     collapsibles[i].classList.remove('collapsible--visible');
//   }
//   console.log (closeAllCollapsibles);
// }

// for (var yas = 0; yas < collapsibleTriggers.length; yas++) {
//   collapsibleTriggers[yas].addEventListener('click', updateCollapsibles);
// }
