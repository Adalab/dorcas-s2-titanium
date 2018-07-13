'use strict';

var fr = new FileReader();

var uploadBtn = document.querySelector('.añadir__upload-btn');
var fileField = document.querySelector('#img-selector');
var profileImage = document.querySelector('.card__pic');
var miniBox = document.querySelector ('.mini');

function getImage(e){
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {

  profileImage.style.backgroundImage = 'url(' + fr.result + ')';
  miniBox.style.backgroundImage = 'url(' + fr.result + ' )';
}
function fakeFileClick() {
  fileField.click();
}
fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);


