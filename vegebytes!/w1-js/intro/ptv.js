// station and line arrays

var alameinLine = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverleyLine = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var sandringhamLine = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

var userStartLine = glenWaverleyLine; // user has to enter start & end lines & stations
var userEndLine = alameinLine; // sandringhamLine; alameinLine; glenWaverleyLine;

var userStartStation = "Flagstaff";
var userEndStation = "Glenferrie";

var alameinLStartIndex = alameinLine.indexOf(userStartStation); //creating index's for stations
var alameinLEndIndex = alameinLine.indexOf(userEndStation); 

var glenWaverleyLStartIndex = glenWaverleyLine.indexOf(userStartStation); //creating index's for stations
var glenWaverleyLEndIndex = glenWaverleyLine.indexOf(userEndStation);

var sandringhamLStartIndex = sandringhamLine.indexOf(userStartStation); //creating index's for stations
var sandringhamLEndIndex = sandringhamLine.indexOf(userEndStation);


var stationsInJourney1 = [];
var stationsInJourney2 = [];

var journey1 = function() {
  if (alameinLStartIndex >= 0) {    

    if (alameinLStartIndex < 1) {   
      for (var i = alameinLStartIndex; i <= 1; i++) { 
        stationsInJourney1.push(alameinLine[i]);
       }
    }    
    if (alameinLStartIndex > 1) {
      for (var i = alameinLStartIndex; i >= 1; i--) { 
        stationsInJourney1.push(alameinLine[i]);
      }
    }
  }
  if (glenWaverleyLStartIndex >= 0) {    

    if (glenWaverleyLStartIndex < 3) {   
      for (var i = glenWaverleyLStartIndex; i <= 3; i++) { 
        stationsInJourney1.push(glenWaverleyLine[i]);
       }
    }
      
    if (glenWaverleyLStartIndex > 3) {
      for (var i = glenWaverleyLStartIndex; i >= 3; i--) { 
        stationsInJourney1.push(glenWaverleyLine[i]);
      }
    }
  }
  if (sandringhamLStartIndex >= 0) {    

    if (sandringhamLStartIndex < 1) {   
      for (var i = sandringhamLStartIndex; i <= 1; i++) { 
        stationsInJourney1.push(sandringhamLine[i]);
       }
    }   
    if (sandringhamLStartIndex > 1) {
      for (var i = sandringhamLStartIndex; i >= 1; i--) { 
        stationsInJourney1.push(sandringhamLine[i]);
      }
    }
  }
}  
journey1(); 

var journey2 = function() {
  if (alameinLEndIndex >= 0) {    

    if (alameinLEndIndex > 1) {   
      for (var i = 2; i < alameinLEndIndex; i++) { 
        stationsInJourney2.push(alameinLine[i]);
       }
    }    
    else if (alameinLEndIndex === 0) {
      stationsInJourney2.push(alameinLine[0]);
    }
  }
  if (glenWaverleyLEndIndex >= 0) {    

    if (glenWaverleyLEndIndex > 3) {   
      for (var i = 4; i <= glenWaverleyLEndIndex; i++) { 
        stationsInJourney2.push(glenWaverleyLine[i]);
       }
    }  
    if (glenWaverleyLStartIndex < 1) {
      for (var i = 2; i >= 3; i--) { 
        stationsInJourney2.push(glenWaverleyLine[i]);
      }
    }
  }
  if (sandringhamLEndIndex >= 0) {    
    if (sandringhamLEndIndex > 1) {   
      for (var i = 2; i < sandringhamLEndIndex; i++) { 
        stationsInJourney2.push(sandringhamLine[i]);
       }
    }
    else if (sandringhamLEndIndex === 0) {
      stationsInJourney2.push(sandringhamLine[0]);
    }
  }
}  
journey2();

var journeyLength = function() {
  if (alameinLStartIndex >= 0) {
    if (alameinLEndIndex >= 0) {
        return Math.abs(alameinLStartIndex - alameinLEndIndex);
    } else if (glenWaverleyLEndIndex >= 0) {
        return Math.abs(alameinLStartIndex - 1) + (glenWaverleyLEndIndex - 3);
    } else if (sandringhamLEndIndex >= 0) {
        return Math.abs(alameinLStartIndex - 1) + (sandringhamLEndIndex -1);
    }
  } else if (glenWaverleyLStartIndex >= 0) {
    if (glenWaverleyLEndIndex >= 0) {
        return Math.abs(glenWaverleyLStartIndex - glenWaverleyLEndIndex);
    } else if (alameinLEndIndex >= 0) {
        return Math.abs(glenWaverleyLStartIndex - 3) + (alameinLEndIndex - 1);
    } else if (sandringhamLEndIndex >= 0) {
        return Math.abs(glenWaverleyLStartIndex - 3) + (sandringhamLEndIndex -1);
    }
  } else if (sandringhamLStartIndex >= 0) {
    if (sandringhamLEndIndex >= 0) {
        return Math.abs(sandringhamLStartIndex - sandringhamLEndIndex);
    } else if (alameinLEndIndex >= 0) {
        return Math.abs(sandringhamLStartIndex - 1) + (alameinLEndIndex - 1);
    } else if (glenWaverleyLEndIndex >= 0) {
        return Math.abs(sandringhamLStartIndex - 1) + (glenWaverleyLEndIndex -3);
    }
  }    
}

journeyLength();  

console.log("Your journey has the following stations: " + journey1() + ", " + journey2());
console.log("Your journey is " + journeyLength() + "stops");



