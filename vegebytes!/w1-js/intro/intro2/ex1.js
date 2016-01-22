
// // Age Calculator excercise
var currentYear = 2015;
var birthYear = 1947;
var age = currentYear - birthYear;
var altAge = age - 1;
/* DT created another variable here
var message = "they are either " + age " or " altAge "years old"
then he did console.log */
console.log("You are " + age + " or " + altAge + " years old");


// // Lifetime supply calculator
var currentAge = 25;
var maximumAge = 100;
var estimatedAmountPerDay = 5;
var supply = ((maximumAge - currentAge) * (365 * estimatedAmountPerDay));
console.log("You will need " + supply + " of individual turnips to last you until the ripe old age of " + maximumAge);

// // The Geomitizer
var radius = 10;
var circum = 2 * Math.PI * radius;
var area = radius * radius * Math.PI;

console.log("The circumference is " + circum);
console.log("The area is " + area);

// // The Temperature Converter
var cTemp = 20;
var fTemp = 100;

var cTConverted = (cTemp * 9) / 5 + 32;
console.log(cTemp + "°C is " + cTConverted + "°F");

var fTConverted = (fTemp - 32) * 5 / 9;
console.log(fTemp + "°F is " + fTConverted + "°C")

// The Odd Even Reporter
for (var count = 0; count <= 20; count++) {
  if (count % 2 === 0){
    console.log("That number is Even")
  } else if (count % 2 !== 0) {
    console.log("That is disgusting, how could you be so odd!")
  }
}

// The Multiplication Table(My work)
for (var count = 0; count <= 10; count++) {
  var multipliedByNine = count * 9
  if (count) {
    console.log(multipliedByNine);
  }
}
// DT's example
for (var count = 0; count <= 10; count++) {
  console.log(count + " x 9 = " + (count * 9));
}

// DT's nested loop
for (var count = 0; count <= 10; count++) {
  console.log(count + " times table")

  for (var timesTable = 0; timesTable <= 10; timesTable++) {
    console.log(count + " x " + timesTable + " = " + (count * timesTable);
  }    
}  







