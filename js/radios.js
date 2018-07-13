'use strict';

var nombreVisor = document.querySelector('#element-name');
var puestoVisor = document.querySelector('#element-role');
var borderVisor = document.querySelector('.card__head--border');
var iconBorderVisor = document.querySelector('.card__foot--icon');
var iconVisor = document.querySelector('.iconsocial');
var habilidadesVisor = document.querySelector('.card__foot--text');
var colorVisor = document.querySelectorAll('.diseña__colores--paleta');
var fuenteVisor = document.querySelectorAll('.diseña__fuentes');

var color1 = '$dark-green-blue';
var color2 = '$dirty-blue';
var color3 = '$hospital-green';

function definirColores(){
    borderVisor.style.borderLeft = '5px solid' + color3;
    iconBorderVisor.style.border = '2px solid 'color3;
    iconVisor = color1;
    habilidadesVisor = color2;
    nombreVisor = color1;
}


function cambiarColor(event) {
var colores = event.currentTarget.id;
if (colores === 'red'){
    var color1 = '$dark-green-blue';
    var color2 = '$dirty-blue';
    var color3 = '$hospital-green';

} 
}
function cambiarFuente(){
teste();
}

for(var i = 0; i < colorVisor.length; i++) {
    colorVisor[i].addEventListener('click',cambiarColor);
}
for(var i = 0; i < fuenteVisor.length; i++){
    fuenteVisor[i].addEventListener('click',cambiarFuente);
}