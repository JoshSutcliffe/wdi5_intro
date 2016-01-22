console.log(4);

var instruments = {
  first: "drums",
  second: "piano",
  third: "triangles",
}

var song = {
  title: "hello",
  artist: "lionel richie",
  "release date": 1983,
}

var nyanCat = {
  age: 18,
  furColour: "purple",
  likes: ["milk", "rainbows"],
  birthday: { year: 1999, month: 5, },
}

var songs = [{
  oasis_songs: ["masterplan", "songbird"],
}, {
  kasabian_songs: ["velociraptor", "empire"],
}]

// // The Recipe Card
// var recipe = {
//   title: "Mole",
//   servings: 2,
//   ingredients: ["cinnamon", "cumin", "cocoa"],
// }

// console.log(recipe.title);
// console.log(recipe.servings);
// for (var counter = 0; counter < 4; counter++) {
//   console.log(recipe.ingredients[counter]);
// }

var film1 = {
  title: "Saving Private Ryan",
  duration: 240,
  stars: ["Tom Hanks", "Vin Diesel"],
}

function filmInfo () {
  console.log(film1.title + " lasts for " + film1.duration + " minutes. The stars are " + film1.stars.join(" and "))
}

filmInfo ();

var books = [{
  title: "song of fire and ice",
  author: "Martin",
  alreadyRead: false,
}, { 
  title : "harry potter",
  author: "Rowling",
  alreadyRead: true,
}, { 
  title: "lord of the rings",
  author: "Tolkein",
  alreadyRead: false,
}]; 

for (counter = 0; counter < books.length; counter++) {
  var currentBook = books[counter];
  if (currentBook.alreadyRead === true) {
    console.log("already read " + currentBook.title);
  } else {
    console.log("you haven't read " + currentBook.title + " yet");
  }
}




// The Reading List
var books = [{
  title: "song of fire and ice",
  author: "Martin",
  alreadyRead: false,
}, { 
  title : "harry potter",
  author: "Rowling",
  alreadyRead: true,
}, { 
  title: "lord of the rings",
  author: "Tolkein",
  alreadyRead: false,
}]; 

for (var counter = 1; counter < books.length; counter++) {
  var currentBook = books[counter];
    
  if (currentBook.alreadyRead === true) {
    console.log("already read " + currentBook.title);
  } else {
    console.log("you may want to check out " + currentBook.title);
  }
}

// ex3 DT
var film2 = {
  title: "sharknado",
  duration: 100,
  stars: ["guy from 90210", "some sharks"],
}
 
function filmInformation() {
  console.log(film2.title);
  console.log(film2.stars.join(", "));
}

filmInformation();
















