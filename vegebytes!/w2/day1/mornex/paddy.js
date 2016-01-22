console.log("chips and butty");

function askQuestion() {
  var q = question.value;
  if (q === "Happy St Patrick's") {
    answer.innerHTML = "Tildlely de, potatoes";
  } else if (q === "Do you want a pint of Guinness?" && count === 0) {
    answer.innerHTML = "Come again?";
    count = 1;
  } else if (q === "DO YOU WANT A PINT OF GUINNESS?" && count === 1) {
    answer.innerHTML = "Just the luck of the Irish";
    count = 0;
  } else if (q === "Paddy, it's your round") {
    answer.innerHTML = "Look, Leprechaun!";
  } else {
    answer.innerHTML = "My da' was a potato farmer too. Good for you!";
  }
  question.value = "";
}


var count = 0;
var question = document.getElementById("question");
var button = document.getElementById("button");
button.addEventListener('click', askQuestion);
var answer = document.getElementById("answer");


// var inputBoxId = document.getElementById("input-box");
// var questionButton = document.getElementById("question");

// var paddysResponse = document.getElementById("paddys-response");
// var paddysGuiness = document.getElementById("paddys-guiness");
// var paddysCantHear = document.getElementById("paddys-cant-hear");
// var paddysLuck = document.getElementById("paddys-luck");
// var paddysRound = document.getElementById("paddys-round");
// var paddysLeprechaun = document.getElementById("paddys-leprechaun");
// var paddysPissOff = document.getElementById("paddys-piss-off");

// var paddy = function() {
//   if (inputBoxId.value === "Happy St Patricks Day") {
//     paddysResponse.innerHTML = "tildlely de, potatoes"; 
//     if (inputBoxId.value === "Happy St Patricks Day") {
//       paddysGuiness.innerHTML = "Do you want a pint of Guiness Paddy?";
//       if (inputBoxId.value === "Happy St Patricks Day") {
//         paddysCantHear.innerHTML = "Oi, Paddy, you want a Pint or not?!";
//         if (inputBoxId.value === "Happy St Patricks Day") {
//           paddysLuck.innerHTML = "Ah, just the luck of the Irish";
//           if (inputBoxId.value === "Happy St Patricks Day") {
//             paddysRound.innerHTML = "It's your turn now Paddy";
//             if (inputBoxId.value === "Happy St Patricks Day") {
//               paddysLeprechaun.innerHTML = "Look, Leprechaun!";
//             }
//           }
//         }
//       }
//     }
//   } else if (inputBoxId.value !== "Happy St Patricks Day") {
//       paddysPissOff.innerHTML = "Get out me boozer!";
//   }                                      
// }

// questionButton.addEventListener("click", paddy);

