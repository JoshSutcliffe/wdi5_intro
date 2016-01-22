console.log("its working");

if (5 > 4) {
	console.log("Math is so easy")
}

var vegebyteRule = true;

if (vegebyteRule) {
	console.log("Yay vegebyte!")
}

var myName = " ";
if (myName) {
	console.log("hello" + myName);
}
// empty strings " " are falsey

var points = 0;
if (points) {
	console.log("you have" + points + ' points');
}
// the number 0 is falsey

var firstName;
if (firstName) {
	console.log("your first name is" + firstName);
}
// undefined is falsey

var firstName = null;
if (firstName) {
	console.log("your first name is" + firstName);
}
// null is falsey

// var year = 2015;
// 	if (year === 2015) {
// 		console.log("I'm in the present!"); 
// 	} else if (year < 2015) {
// 		console.log("Whoa! Blast from the past!");
// 	} else {
// 		console.log("Greetings from the future!");
// 	}	
var d = new Date();
var year = d.getFullYear();
console.log("Current date: " + year);
	if (getFullYear === 2015) {
		console.log("I'm in the present!"); 
	} else if (getFullYear < 2015) {
		console.log("Whoa! Blast from the past!");
	} else {
		console.log("Greetings from the future!");
	}


var year = "2015";

year = parseInt(year);

 if (year === 2015) {
   console.log("I'm in the present!"); 
 } else if (year < 2015) {
   console.log("Whoa! Blast from the past!");
 } else {
   console.log("Greetings from the future!");
 } 


