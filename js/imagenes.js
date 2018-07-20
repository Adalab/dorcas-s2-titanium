'use strict';

const FR = new FileReader();

const UPLOADBTN = document.querySelector('.añadir__upload-btn');
const FILEFIELD = document.querySelector('#img-selector');
const PROFILEIMAGE = document.querySelector('.card__pic');
const MINIBOX = document.querySelector('.mini');

const writeImage = () => {
  PROFILEIMAGE.style.backgroundImage = `url(${FR.result})`;
  MINIBOX.style.backgroundImage = `url(${FR.result})`;
};

const getImage = e => {
  const MYFILE = e.currentTarget.files[0];
  FR.addEventListener('load', writeImage);
  FR.readAsDataURL(MYFILE);
};

const fakeFileClick = () => FILEFIELD.click();

FILEFIELD.addEventListener('change', getImage);
UPLOADBTN.addEventListener('click', fakeFileClick);
