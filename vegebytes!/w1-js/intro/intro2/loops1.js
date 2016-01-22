console.log("loopy");

var counter = 0;

while (true) {
  console.log("again");
}
this is an infitie loop

var counter = 0;

while (count < 10) {
  console.log("counter is " + counter);
}
// this loop doesn't have an exit condition

var counter = 0;

while (counter < 10) {
  console.log("counter is " + counter);
  counter = counter + 1;
}
// this prints ten copies

var counter = 0;

while (counter <= 10) {
  console.log("counter is " + counter);
  counter = counter + 1;
} 

var secretNumber = 17
var userInput = prompt("Guess the secret number below 20!");
  while (secretNumber !=  userinput) {
    console.log("Guess the secret number below 20!");
  }
    console.log("Well done!")
my failed attempt at a while loop. User input can only be a string, 
never a number

var secretNumber = 42;
var guess = prompt("Enter a number between 1 and 5");
  while (secretNumber !== parseInt(guess) {
    console.log("you fail!");
    guess = prompt("Enter a number between 1 and 5");
  }

  do {
    var guess = parseInt(prompt("enter a number"));
  } while(secretNumber !== guess);
// DT's examples of while and do loops

fizzbuzz(100);
function fizzbuzz(x) {
  for (var i = 0; x < 100; x + 1);
    if (x % 3 === 0 && x % 5 !== 0) {
      console.log("fizz");
  } else if (x % 3 !== 0 && x % 5 === 0) {
      console.log("buzz");
  } else if (x % 3 === 0 && x % 5 === 0) {
      console.log("fizzbuzz");
  } else {
    console.log();
  }
} // attempt at this using a function

for (var i = 0; i <= 100; i += 1) {
  if (i % 3 === 0 && i % 5 !== 0) {
      console.log("fizz");
  } else if (i % 3 !== 0 && i % 5 === 0) {
      console.log("buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
  } else {
    console.log(i);
  }
} // old school fizz buzz!



