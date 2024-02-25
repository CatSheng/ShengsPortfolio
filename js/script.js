/*NAVIGATION BAR*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/*NAVIGATION BAR*/

/*HOME PAGE BUTTON*/
function homeButton() {
  var element = document.getElementById("myDIV");
  element.classList.toggle("mystyle");
}
/*HOME PAGE BUTTON*/

/*ABOUT PAGE BUTTON*/
function discoFunction() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
}
/*ABOUT PAGE BUTTON*/

/*CODE PAGE BUTTON*/
document.getElementById("myBtn").addEventListener("click", function () {
  alert("ALERT! You are amazing :)");
});

function taller() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("(ー_ー)");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}
/*CODE PAGE BUTTON*/

/*TRAVEL PAGE BUTTON*/
function fancyText() {
  document
    .getElementById("travelTitle")
    .classList.add("mystyle", "anotherClass", "thirdClass");
}
/*TRAVEL PAGE BUTTON*/

/*ART PAGE BUTTON*/
function loadingcursor() {
  document.getElementById("demo").style.cursor = "zoom-in";
}
/*ART PAGE BUTTON*/
