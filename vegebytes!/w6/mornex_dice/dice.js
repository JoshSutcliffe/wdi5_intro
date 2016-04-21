console.log("Cheese")

var dice = [1, 2, 3, 4, 5, 6];
var empArr = [];

var diceRoll = function(num) {
  if (num === 1) {
  var randomSelector = dice[Math.floor(dice.length * Math.random())];
  empArr.push(randomSelector)
  console.log(empArr)
  } else if (num > 1) {
    for (var i = num; i >= 0; i--) {
      var randomSelector = dice[Math.floor(dice.length * Math.random())][i];
      empArr.push(randomSelector)
      console.log(empArr)
    }
  }
}

diceRoll();

