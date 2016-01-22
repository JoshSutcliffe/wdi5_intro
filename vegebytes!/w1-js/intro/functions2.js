// console.log("Hi there");

// var cheese = "brie cheese";

// var microwaveIt = function(food) {
//   var crazyWaves = "~";

//   food = food.split("").join(crazyWaves);

//   var doSomething = function() {
//     var secret = "Top secret";
//   }

//   return food;
// }

// var add = function(number1, number2) {
//   return number1 + number2;
// }

// add(2, 5);

// var counter = function(number) {
//   return number + 1;
// }

// counter(5);

// var doSomething = function(task) {

//   console.log("the function or 'task' you give me is: ", task);
// }

// var simpsons = ["bart", "lisa", "homer", "maggie", "marge", "ned"];

// var scores = [1, 10, 2, 21];

// doSomething(counter);

// var sayHello = function() {
//   console.log("hello there");
// }

// setTimeout();

//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here

var simpsons = ["bart", "lisa", "homer", "maggie", "marge", "ned"];

var lengths = function(arrayOfSimpsons) {
  var arr = [];

    for (var index = 0; index < arrayOfSimpsons.length; index++) {
      var wordLength = arrayOfSimpsons[index].length;

      arr.push(wordLength);

    }

    return arr;
  }

console.log( lengths(simpsons) );  
  


// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

var transmogrifier = function(num1, num2, num3) {
  console.log(Math.pow(num1 * num2, num3))
}

transmogrifier(3, 4, 2);

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// "melbourne dick"
// 'dick melbourne'


var wordReverse = function(placeName) {
  var placeReversed = [];

    for (var counter = placeName.length - 1; counter >= 0; counter--) {
      var placeLength = placeName[counter].length;

      placeReversed.push(placeLength);
    }

    return placeReversed
}

wordReverse("Melbourne", "London", "Santiago");

// var lengths = function(arrayOfSimpsons) {
//   var arr = [];

//     for (var index = 0; index < arrayOfSimpsons.length; index++) {
//       var wordLength = arrayOfSimpsons[index].length;

//       arr.push(wordLength);

//     }

//     return arr;
//   }

// console.log( lengths(simpsons) );  






