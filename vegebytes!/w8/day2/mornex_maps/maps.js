var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
          {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
          {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
          {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
          {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
          {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]

var placeFinder = function() {

  var currentLocation = {name: "Swanston Street", location: {lat: 37.70282, long: -122.5}};

  var toSort = []

  for (var i = 0; i < myResults.length; i++) {
    // loop through myResults, push into an array the lat - long; smallest number is closest
    var latResult = Math.abs(currentLocation.location.lat - myResults[i].location.lat);
    var longResult = Math.abs(currentLocation.location.long - myResults[i].location.long);
    toSort.push(latResult + longResult);
  };

  // find the index of the smallest number in toSort, store in a variable
  var index = toSort.indexOf(Math.min.apply(Math, toSort));
  // use the variable to find the right object in myResults
  console.log(myResults[index].name + " is closest to " + currentLocation.name);
};


placeFinder()