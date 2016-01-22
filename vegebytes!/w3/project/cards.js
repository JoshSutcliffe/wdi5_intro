
var whichPlayersTurn = document.getElementById('whose-turn');
var cardSelection = document.getElementsByClassName('span1');

var choice1 = function() {
  whichPlayersTurn.innerHTML = "Now select a second card";
}

cardSelection.addEventListener("click", choice1);