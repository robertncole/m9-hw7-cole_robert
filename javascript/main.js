var button = document.getElementsByTagName('button');

console.log (button);

var locationDiv = document.getElementsByClassName('hide-div');

function changeColor() {
  this.classList.toggle('change_color');
}

function showDiv() {
  this.nextElementSibling.classList.toggle('show-div');
}

for (i=0; i < button.length; i++) {
  button[i].addEventListener('mouseenter', changeColor);
  button[i].addEventListener('mouseleave', changeColor);   button[2].addEventListener('click', showDiv); button[6].addEventListener('click', showDiv);
}