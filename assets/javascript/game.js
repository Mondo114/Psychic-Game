var userWin = 0;
var computerWin = 0;
var guesses = 10;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length) + 1];
console.log("com:", computerGuess)
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log("you:" + userGuess);

    if (guesses > 0 && userWin < 5 && computerWin < 5) {
        if (userGuess === computerGuess) {
            console.log("guessed right");
            userWin++;
        }
        else {
            console.log("guessed wrong");
            guesses--;
            console.log(guesses)
            if (guesses === 0) {
                computerWin++;
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length) + 1];
                guesses = 10;
                console.log("computer gets a point");
            }
        }
    }
    else if (guesses === 0) {
        computerWin++;
        console.log("computer gets a point");
    }
    else if (userWin = 5) {
        console.log("You Won!");
    }
    else if (computerWin === 5) {
        console.log("Game Over, Man! Game Over!");
    }

}

var html =
"<p>Your wins: " + userWin + "</p>"
"<p>Computer's wins: " + computerWin + "</p>"
"<p>Number of guesses left this round: " + guesses + "</p>"

// Set the inner HTML contents of the #game div to our html string
document.getElementById("game").innerHTML = html;
