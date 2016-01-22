console.log("butty");

var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var isWalking = false;

function catWalk() {
  var img = document.getElementById('cat');
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth - img.width)) {
    img.style.transform = "rotate(180deg)";
    movePixels = -10;
  } else if (currentLeft < 0) {
    img.style.transform = "rotate(0deg)";
    movePixels = 10;
  }
}

function startCatWalk() {
  if (isWalking === false) { //only startCatWalk if not already walking
    isWalking = true;
    catTimer = setInterval(catWalk, delayMs);
  }
}

var speedCatWalk = function() {
  if (isWalking === true) { //only speed up if cat is already walking
    stopCatWalk();
    delayMs = delayMs - 5;
    startCatWalk();
  }
}

var stopCatWalk = function() {
  clearInterval(catTimer);
  isWalking = false;
}

var startButton = document.getElementById("start-button");
var speedButton = document.getElementById("speed-button");
var stopButton = document.getElementById("stop-button");

startButton.addEventListener("click", startCatWalk);
speedButton.addEventListener("click", speedCatWalk);
stopButton.addEventListener("click", stopCatWalk);


