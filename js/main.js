'use strict'

var arrow = document.querySelector('.fieldset__rellena--arrow');

var mobilelLink = document.querySelector('.mobilelLink');
var emailLink = document.querySelector('.emailLink');
var linkedinLink = document.querySelector('.linkedinLink');
var githubLink = document.querySelector('.githubLink');


arrow.addEventListener('click', teste);


var contact = document.querySelector('.contact');

contact.addEventListener('keyup', showIcon);



function showIcon(event) {
  if (event.target !== event.currentTarget) {

    notif(event.target.value);

    var guilty = event.target.className;
    var changeIcon;

    if ( guilty.indexOf('email') >= 0 ){
      var email2Link = event.target.value;
      emailLink.href = 'mailto:' + email2Link;
      changeIcon = 'email';

    } else if ( guilty.indexOf('mobile') >= 0 ){
      changeIcon = 'mobile';

    } else if ( guilty.indexOf('linkedin') >= 0 ){
      var linkedin2Link = event.target.value;
      linkedinLink.href = 'http://linkedin.com/in/' + linkedin2Link;
      changeIcon = 'linkedin';

    } else if ( guilty.indexOf('github') >= 0 ){
      var github2Link = event.target.value;
      githubLink.href = 'https://github.com/' + github2Link;


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
