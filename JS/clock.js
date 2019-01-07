function red() {
    document.body.style.backgroundColor = "red";
}
function orangered() {
    document.body.style.backgroundColor = "orangered";
}
function yellow() {
    document.body.style.backgroundColor = "yellow";
}
function green() {
    document.body.style.backgroundColor = "green";
}
function blue() {
    document.body.style.backgroundColor = "blue";
}
function blueviolet() {
    document.body.style.backgroundColor = "blueviolet";
}
function violet() {
    document.body.style.backgroundColor = "violet";
}
function white() {
    document.body.style.backgroundColor = "white";
}
function grey() {
    document.body.style.backgroundColor = "grey";
}
function black() {
    document.body.style.backgroundColor = "black";
}

  var goFS = document.getElementById("goFS");
  goFS.addEventListener("click", function() {
      document.documentElement.requestFullscreen();
  }, false);
