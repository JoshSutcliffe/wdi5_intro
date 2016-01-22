// My Shite attempt below

// var randomGenerator = 1;

// var coinFlip = function(heads, tails) {
//   for (var i = 1; i <= 5; i++) {
//     heads[i];
//     tails[i];
//     Math.random(randomGenerator);
//       if (heads <= 5) {
//         console.log("Winner Winner Chicken Dinner Heads!");
//       } else if (tails <= 5) {
//         console.log("Tails Nevers fails!")
//       }
//   }
// }

// coinFLip(1, 1);

// transmorgifier
var wordReverse = function(string) {
  var reverseWords = string.split("");
  reverseWords = reverseWords.reverse().join(" ");
  return reverseWords;
}

console.log(wordReverse("Never eat shredded wheat"));

var wordReverse = function (string){
    var reversed = string.split('');    //split string into characters, add to array
    reversed = reversed.reverse().join(' ')    //reverse array, convert to string
    return reversed;
}

console.log(wordReverse('testing testing 1 2 3 '));

// Using Locky's example as help

// var coinToss = function() {
//   return (Math.floor(Math.random() * 2 ) == 0) ? "heads" : "tails";
// }

// console.log(coinToss());

// var headsTotal = 0;
// var tailsTotal = 0;

// for (var i = 0; i < 10; i++) {
//   flip = coinToss();
//   console.log(coinToss);
//     if (flip == "heads") {
//       headsTotal++;
//     } else if (flip == "false") {
//       tailsTotal++;
//     }
// }

// if (headsTotal > tailsTotal) {
//   console.log("Winner Winner Chicken Dinner Heads!");
// } else if (headsTotal < tailsTotal) {
//   console.log("Tails Nevers fails!")
// }





