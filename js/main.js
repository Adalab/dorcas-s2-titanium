'use strict'

var arrow = document.querySelector('.fieldset__rellena--arrow');

arrow.addEventListener('click', teste);

/* ------ ANNA ------ */

// // Variables para los iconos
// var email = document.querySelector('.email');
// var mobile = document.querySelector('.mobile');
// var github = document.querySelector('.github');
// var linkedin = document.querySelector('.linkedin');
//
// // Variables para los campos de form referentes a los contactos
// var inputEmail = document.querySelector('.fieldset__rellena--input-email');
// var inputMobile = document.querySelector('.fieldset__rellena--input-mobile');
// var inputLinkedin = document.querySelector('.fieldset__rellena--input-linkedin');
// var inputGithub = document.querySelector('.fieldset__rellena--input-github');

var contact = document.querySelector('.contact');

contact.addEventListener('keyup', showIcon);



function showIcon(event) {
    if (event.target !== event.currentTarget) {

      notif(event.target.value);

var guilty = event.target.className;
var changeIcon;

if ( guilty.indexOf('email') >= 0 ){
  changeIcon = 'email';

} else if ( guilty.indexOf('mobile') >= 0 ){
  changeIcon = 'mobile';

} else if ( guilty.indexOf('linkedin') >= 0 ){
  changeIcon = 'linkedin';

} else if ( guilty.indexOf('github') >= 0 ){
  changeIcon = 'github';
}

var icon2Toggle = document.querySelector("." + changeIcon);

   if (event.target.value === "") {
     icon2Toggle.style.display = 'none';
     notif(event.target.value);
} else {
  icon2Toggle.style.display = 'inline';
     notif(event.target.value);
    }
    event.stopPropagation();
}
}

//inputEmail.addEventListener('keyup', defEmail);

// function defEmail (event) {
//   notif(event.currentTarget.className);
//   if (event.currentTarget.value === "") {
//     email.style.display = 'none';
//     notif('empty');
//   } else {
//     email.style.display = 'inline';
// notif('cont');
//   }
// }

function notif(a) {
  if (a === undefined) {
    console.log('ok');
  } else   console.log(a);
}

function teste(){
  alert('Testing... ok!');
}
