var magic8Ball = ["No", "Not today", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

var magicBallSelector = function() {
  var randomSelector = magic8Ball[Math.floor(magic8Ball.length * Math.random())];
  console.log(randomSelector);
    document.getElementById("users-fate").innerHTML = randomSelector;
}

var button = document.getElementById("fate-button");
console.log(button);

button.addEventListener("click", magicBallSelector);