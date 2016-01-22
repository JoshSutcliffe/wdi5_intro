// Bugs to fix:
// * When a player gets to five wins there are win
// messages flying all over the place

var cell = $(".cell");
var newGameBtn = $(".new-game");
var player1Wins = 0;
var player2Wins = 0;

var player1Token = "x";
var player2Token = "o";

var counter = 1;
var winAlertCounterP1 = 0; // These are to create multiple games
var winAlertCounterP2 = 0; // before the gameEnd()

var P1WinsHTML = document.getElementById('P1-wins');
var P2WinsHTML = document.getElementById('P2-wins');

var box = ['0','1','2','3','4','5','6','7','8'];

// Changing the token for the players clicks
var playersMove = function() {
  if (counter % 2 !== 0) {
    var selectedBox = $(this).attr("id");
    var boxValue = parseInt(selectedBox);
    var playerTokenPlacement = box.splice(boxValue, 1, player1Token);
    $(this).html(player1Token);
    counter++;
    winfForPlayer1();
  } else {
    var selectedBox = $(this).attr("id");
    var boxValue = parseInt(selectedBox);
    var playerTokenPlacement = box.splice(boxValue, 1, player2Token);
    $(this).html(player2Token);
    counter++;
    winfForPlayer2();    
  }
  if (counter >= 10) {
  alert("It's a draw");
  resetBoard();
  }
  changePlayer();
}

$("#board").on("click", ".cell", playersMove);

// Changing the DOM to state whose turn it is
var currentPlayer = "It is Player 1's turn";

var changePlayer = function() {
  if (counter % 2 !== 0) {
    currentPlayer = "It is Player 1's turn";
    document.getElementById('whose-turn').innerHTML = currentPlayer;
  } else if (counter % 2 === 0){
    currentPlayer = "It is Player 2's turn";
    document.getElementById('whose-turn').innerHTML = currentPlayer;
  }
}

// win conditions for player 1
var winfForPlayer1 = function() {
  if (box[0] === player1Token && box[1] === player1Token && box[2] === player1Token) {
    player1Wins = player1Wins + 1;
    winAlertCounterP1 = 1;
  } else if (box[3] === player1Token && box[4] === player1Token && box[5] === player1Token) {
    player1Wins = player1Wins + 1;
    winAlertCounterP1 = 1;  
  } else if (box[6] === player1Token && box[7] === player1Token && box[8] === player1Token) {
    player1Wins = player1Wins + 1;
    winAlertCounterP1 = 1;  
  } else if (box[0] === player1Token && box[3] === player1Token && box[6] === player1Token) {
    player1Wins = player1Wins + 1;
    winAlertCounterP1 = 1;  
  } else if (box[1] === player1Token && box[4] === player1Token && box[7] === player1Token) {
    player1Wins = player1Wins + 1;
    winAlertCounterP1 = 1;  
  } else if (box[2] === player1Token && box[5] === player1Token && box[8] === player1Token) {
    player1Wins = player1Wins + 1;
    winAlertCounterP1 = 1;  
  } else if (box[0] === player1Token && box[4] === player1Token && box[8] === player1Token) {
    player1Wins = player1Wins + 1;
    winAlertCounterP1 = 1;  
  } else if (box[2] === player1Token && box[4] === player1Token && box[6] === player1Token) {
    player1Wins = player1Wins + 1;
    winAlertCounterP1 = 1;  
  }  
  P1WinsHTML.innerHTML = player1Wins; // This sets the score in the HTML
  winAlerts();
}

// win conditions for player 1
var winfForPlayer2 = function() {
  if (box[0] === player2Token && box[1] === player2Token && box[2] === player2Token) {
    player2Wins = player2Wins + 1;
    winAlertCounterP2 = 1;  
  } else if (box[3] === player2Token && box[4] === player2Token && box[5] === player2Token) {
    player2Wins = player2Wins + 1;
    winAlertCounterP2 = 1;  
  } else if (box[6] === player2Token && box[7] === player2Token && box[8] === player2Token) {
    player2Wins = player2Wins + 1;
    winAlertCounterP2 = 1;  
  } else if (box[0] === player2Token && box[3] === player2Token && box[6] === player2Token) {
    player2Wins = player2Wins + 1;
    winAlertCounterP2 = 1;  
  } else if (box[1] === player2Token && box[4] === player2Token && box[7] === player2Token) {
    player2Wins = player2Wins + 1;
    winAlertCounterP2 = 1;  
  } else if (box[2] === player2Token && box[5] === player2Token && box[8] === player2Token) {
    player2Wins = player2Wins + 1;
    winAlertCounterP2 = 1;  
  } else if (box[0] === player2Token && box[4] === player2Token && box[8] === player2Token) {
    player2Wins = player2Wins + 1;
    winAlertCounterP2 = 1;  
  } else if (box[2] === player2Token && box[4] === player2Token && box[6] === player2Token) {
    player2Wins = player2Wins + 1;
  } 
  P2WinsHTML.innerHTML = player2Wins;
  winAlerts();
}

var winAlerts = function() {
  if (player1Wins === 5) {
    alert("Congratulations! Player 1 has won! Play again?");
    winAlertCounterP1 = 0;
    counter = 1;
  } else if (winAlertCounterP1 === 1) {
    alert("Player 1 has won the round!");
    winAlertCounterP1 = 0;
    counter = 1;
    resetBoard(); 
  } else if (player2Wins === 5) {
    alert("Player 2 has won! Play again?");
    winAlertCounterP2 = 0;
    counter = 1;
  } else if (winAlertCounterP2 === 1) {
    alert("Congratulations! Player 2 has won the round!");
    winAlertCounterP2 = 0;
    counter = 1;
    resetBoard(); 
  }  
}

// The game is over after one person has won 5 times 
var gameEnd = function() {
  player1Wins = 0;
  player2Wins = 0;
  P1WinsHTML.innerHTML = player1Wins;
  P2WinsHTML.innerHTML = player2Wins;
  resetBoard();
}

$("#new-game").on("click", gameEnd);

// resetting the board at the end of a game or new game button
var resetBoard = function() {
  for (var i = cell.length - 1; i >= 0; i--) {
    $(cell[i]).html('');
    box = ['0','1','2','3','4','5','6','7','8'];
  }
  counter = 1;
}



