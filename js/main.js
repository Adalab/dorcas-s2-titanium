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
var div = document.querySelector('.formulario');
var fr = new FileReader();
submitButton.addEventListener('click', getImage);
function sendData(){
  var inputs = Array.from(div.label);
  var json = getJSONFromInputs(inputs);
  json.skills = ['Javascript', 'React'];
  json.photo = fr.result;
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
  if(result.success){
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  } else {
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}



