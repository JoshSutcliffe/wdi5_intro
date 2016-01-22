console.log("butty");

var bobsTotal = (3 + 2+ 6+ 11 + 9 + 2 + 6 + 9 + 10);
var jimboTotal = (5 + 12 + 9 + 22 + 13 + 7 + 16 + 10 + 11);
var fishTotal = (2 + 2 + 4 + 5 + 4 + 3 + 6 + 4 + 1);

var coursePar = (3 + 4 + 5 + 5 + 3 + 3 + 4 + 3 + 5); 

var clubScore = function(playerBob, playerJimbo, playerFish) {
  playerBob = bobsTotal;
  playerJimbo = jimboTotal;
  playerFish = fishTotal;
    console.log("Today's club score is: " + (playerBob + playerJimbo + playerFish));
}

clubScore();

var parScores = function(bobsPar, jimbosPar, fishsPar) {
  bobsPar = bobsTotal - coursePar;
  jimbosPar = jimboTotal - coursePar;
  fishsPar = fishTotal - coursePar;
    if (bobsPar < coursePar) {
      console.log("Bob is " + bobsPar + " under par");
    } else if (bobsPar > coursePar) {
      console.log("Bob is " + bobsPar + " over par");
    }
    if (jimbosPar < coursePar) {
      console.log("Jimbo is " + jimbosPar + " under par");
    } else if (jimbosPar > coursePar) {
      console.log("Jimbo is " + jimbosPar + " over par");
    }
    if (fishsPar < coursePar) {
      console.log("Bob is " + fishsPar + " under par");
    } else if (fishaPar > coursePar) {
      console.log("Player is " + fishsPar + " over par");
    }
}

parScores();

