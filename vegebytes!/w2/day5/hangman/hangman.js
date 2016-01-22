var list = ["javascript", "ecmascript", "jQuery", "node", "ember", "bootstrap", "angular", "sql", "nosql", "mysql", "html", "css", "ruby", "ASP", "my uncle dave", "how much wood could a woodchuck chuck if a woodchuck could chuck wood", "knockout", "Augeas", "AutoLISP", "Automator", "Awk", "visual studio", "Visual Basic", "bc", "BCPL", "delphi"]
var startButton = document.getElementById("generate-word");
// var userInputButton = document.getElementById("user-input");

var randomSelector = function() {
  var word = list[Math.floor(Math.random() * (list.length - 1))];
  var hangmanWord = word.split("").join(" ");

  document.getElementById("display-word").innerHTML = hangmanWord;
}

startButton.addEventListener("click", randomSelector);





