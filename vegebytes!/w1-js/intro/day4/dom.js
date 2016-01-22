// console.log("michael jackson");

// var winButton = document.getElementById("win-button");

// var task = function() {
//   console.log("doing task");

//   var success = document.getElementById("success");

//   success.innerHTML = "Win!";
// }

// 
// winButton.addEventListener("click", task);

// var whatsInTheBox = document.getElementById("box-button");

// var boxButton = function() {
//   var inputText = whatsInTheBox.value("input");

//   console.log(inputText);
// }

// boxButton();

var inputBoxId = document.getElementById("input-box");
var boxButton = document.getElementById("box-button");

var sayWhat = function() {
  console.log(inputBoxId.value);

  var htmlReturn = document.getElementById("success");

  success.innerHTML = inputBoxId.value;
}

boxButton.addEventListener("click", sayWhat);

