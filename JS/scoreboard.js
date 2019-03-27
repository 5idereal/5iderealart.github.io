var board1 = document.getElementById('board1');
var score1 = document.getElementById('score1');
count1 = 0;
board1.style.cursor = 'pointer';
board1.onclick = function() {
  count1 += 1;
  score1.innerHTML = count1;
};

board1.onmouseover = function() {
  this.style.backgroundColor = '#9639cc';
};
board1.onmouseout = function() {
  this.style.backgroundColor = '#b848f9';
};

var board2 = document.getElementById('board2');
var score = document.getElementById('score2');
count2 = 0;
board2.style.cursor = 'pointer';
board2.onclick = function() {
  count2 += 1;
  score2.innerHTML = count2;
};

board2.onmouseover = function() {
  this.style.backgroundColor = '#0766ff';
};
board2.onmouseout = function() {
  this.style.backgroundColor = '#004fce';
};

function clearscore1() {
 count1 = 0;
 score1.innerHTML = count1;
}
function clearscore2() {
  count2 = 0;
  score2.innerHTML = count2;
}

/*if (screen.width >= 699) {
  document.location = "";
}*/
