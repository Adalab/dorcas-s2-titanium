'use strict';

const MOBILELINK = document.querySelector('.mobileLink');
const EMAILLINK = document.querySelector('.emailLink');
const LINKEDINLINK = document.querySelector('.linkedinLink');
const GITHUBLINK = document.querySelector('.githubLink');

const INPUTEMAIL = document.querySelector('.fieldset__rellena--input-email');
const INPUTELEFONO = document.querySelector('.fieldset__rellena--input-mobile');
const INPUTLINKEDIN = document.querySelector('.fieldset__rellena--input-linkedin');
const INPUTGITHUB = document.querySelector('.fieldset__rellena--input-github');


const CONTACT = document.querySelector('.contact');

// TODO: llamar localStorage //


const showIcon = event => {
  if (event.target !== event.currentTarget) {

    const GUILTY = event.target.className;
    let changeIcon;

    if (GUILTY.indexOf('email') >= 0) {
      const EMAIL2LINK = event.target.value;
      EMAILLINK.href = `mailto:${EMAIL2LINK}`;
      changeIcon = 'email';

    } else if (GUILTY.indexOf('mobile') >= 0) {
      const MOBILE2LINK = event.target.value;
      MOBILELINK.href = `tel:${MOBILE2LINK}`;
      changeIcon = 'mobile';

    } else if (GUILTY.indexOf('linkedin') >= 0) {
      const LINKEDIN2LINK = event.target.value;
      LINKEDINLINK.href = `http://linkedin.com/in/${LINKEDIN2LINK}`;
      changeIcon = 'linkedin';

    } else if (GUILTY.indexOf('github') >= 0) {
      const GITHUB2LINK = event.target.value;
      GITHUBLINK.href = `https://github.com/${GITHUB2LINK}`;
      changeIcon = 'github';
    }

    let ICON2TOGGLE = document.querySelector(`.${changeIcon}`);

    if (event.target.value === '') {
      ICON2TOGGLE.style.display = 'none';
    } else {
      ICON2TOGGLE.style.display = 'flex';
    }
    event.stopPropagation();
  }
};

CONTACT.addEventListener('keyup', showIcon);
