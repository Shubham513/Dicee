var randomvariableimage1;
var a = Math.floor(Math.random() * 6) + 1;
randomvariableimage1 = "images/dice" + a + ".png";
var image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomvariableimage1);

var b = Math.floor(Math.random() * 6) + 1;
var randomvariableimage2;
randomvariableimage2 = "images/dice" + b + ".png";
// var h=document.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomvariableimage2);

if (a > b) {
  document.querySelector("h1").innerHTML = "Player 1 won";
} else if (a === b) {
  document.querySelector("h1").innerHTML = "Draw";
} else {
  document.querySelector("h1").innerHTML = "Player 2 won";
}
