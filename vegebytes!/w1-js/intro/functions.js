console.log("hello");

// Need to chnge the lines into an object as I can't add arrays into one another

var alameinLine = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverleyLine = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var sandringhamLine = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

var userStartLine = alameinLine; // user has to enter start & end lines & stations
var userEndLine = glenWaverleyLine; // sandringhamLine; alameinLine; glenWaverleyLine;

var userStartStation = "Flinders Street";
var userEndStation = "Windsor";

var userStartIndex = userStartLine.indexOf(userStartStation); //creating index's for stations
var userEndIndex = userEndLine.indexOf(userEndStation);

var stationNames1 = [];

// Problem 1: Adding the length of the journey in stops 

var userJourneyLength;
if (userStartLine === userEndLine) {
    userJourneyLength = Math.abs(userEndIndex - userStartIndex);
  } 
  else if (userStartLine === glenWaverleyLine && userEndLine === alameinLine || sandringhamLine) {
    userJourneyLength = Math.abs((3 - userStartIndex) + (5 - userEndIndex));
  }  
  else if (userStartLine === alameinLine || sandringhamLine && userEndLine === glenWaverleyLine) {
    userJourneyLength = Math.abs((1 - userStartIndex) + (4 - userEndIndex)); 
  }

  // Also here I haven't taken into account starting on alaL || sanL and ending on either of these lines as well

// This is now creating the wrong answer, need to go back and check it



// Problem 2: The concat is still not printing the two arrays together

/* Here I am working out the slice for changing lines and using concat to add them together. as Richmond is the same index
for alamein and sandringham, I can put them together */

// var userJourney; 
//   if (userStartLine === userEndLine) {
//     userJourney = userStartLine.slice(userStartIndex, userEndIndex);
//   } 
//   else if (userStartLine === glenWaverleyLine && userEndLine === alameinLine || sandringhamLine) {
//     userJourney = userStartLine.slice(userStartIndex, [4]).concat(userEndLine.slice([5], userEndStation)); 
//   }  
//   else if (userStartLine === alameinLine || sandringhamLine && userEndLine === glenWaverleyLine) {
//     userJourney = userStartLine.slice(userStartIndex, [1]).concat(glenWaverleyLine.slice([2], userEndStation)); 
//   }

// NEED TO HAVE TWO FUNCTIONS AND PUSH ROUTE ONE & ROUTE TWO TOGETHER

var userJourney1 = function(userStartStation, userEndStation) {

  if (userStartLine === userEndLine) {
    userJourney = userStartLine.slice(userStartIndex, userEndIndex);

    if (userStartLine === glenWaverleyLine && userEndLine === alameinLine || sandringhamLine) {
      var gwlToOthers = userStartLine.slice(userStartIndex, [3]);

      stationNames1.push(gwlToOthers); //Problem with logic here, it's not got anywhere to push into
    }  
    else if (userStartLine === alameinLine || sandringhamLine && userEndLine === glenWaverleyLine) {
      var alalOrSanlToGwl = userStartLine.slice(userStartIndex, [1]);

      console.log("first line")

      stationNames1.push(alalOrSanlToGwl); //Problem with logic here, it's not got anywhere to push into
    } 
  }
   // return stationNames1; 
}
console.log(stationNames1)

  

//   var simpsons = ["bart", "lisa", "homer", "maggie", "marge", "ned"];

// var lengths = function(arrayOfSimpsons) {
//   var arr = [];

//     for (var index = 0; index < arrayOfSimpsons.length; index++) {
//       var wordLength = arrayOfSimpsons[index].length;

//       arr.push(wordLength);

//     }

//     return arr;
//   }

// console.log( lengths(simpsons) );  



// here I'm stating what to log, comparing the two lines that were entered

// if (userStartLine === userEndLine) { // same line, it can't print straight away
//   console.log("There are the following stations before you reach your destination " + userJourney1);
//   console.log("You will arrive in " + userJourneyLength + " stops.")
// }
//     // glenWaverley line has a different index for Richmond, so it has to be addressed separately
//     else if (userStartLine === glenWaverleyLine && userEndLine !== glenWaverleyLine) { 
//       console.log("There are the following stations before you reach your destination " + userJourney1);
//       console.log("You will arrive in " + userJourneyLength + " stops.");
//       console.log("Remember to change at stop 4, " + userStartLine[3]);
//     } 
    // Richmond is [1] for Sandringham and Alamein, so it can be put together
    if (userStartLine !== glenWaverleyLine && userEndLine === glenWaverleyLine) {
      console.log("There are the following stations before you reach your destination " + userJourney1());
      console.log("You will arrive in " + userJourneyLength + " stops");
      console.log("Remember to change at stop 2, " + userStartLine[1]);
    }

    // What I have here doesn't account for starting on alaL || sanL and ending on either of these as well
 













