// create a list of words
var words = ["pizza", "burgers", "hotwings", "tacos"];
// computer will choose words randomly
var computerChoice = Math.floor(Math.random() * words.length);
var chooseWord = words[computerChoice];
// create places for guesses to be stored
var rightGuess = [];
var wrongGuess = [];
var underScore = [];
var pointsWin = 0;
var pointsLose = 0;
var remainingLetters = 8;
console.log(chooseWord);

// create a proper ammount of underscores based on lenght of word
function generateunderScore() {
  for (var i = 0; i < chooseWord.length; i++) {
    underScore.push("_");
  }
  

}
generateunderScore();

function startOver() {
  // create a list of words
  // words = ["pizza", "burgers", "hotwings", "tacos"];
  // computer will choose words randomly
  computerChoice = Math.floor(Math.random() * words.length);
  chooseWord = words[computerChoice];
  // create places for guesses to be stored
  rightGuess = [];
  wrongGuess = [];
  underScore = [];
  remainingLetters = 8;
  document.getElementById("remainingGuesses").innerText = "Remaining Guesses: " + remainingLetters;
  document.getElementById("wrongGuess").innerText = "Wrong Guess: ";
  generateunderScore();
}

document.getElementById("wins").innerText = "Wins: " + pointsWin;
document.getElementById("losses").innerText = "Losses: " + pointsLose;
document.getElementById("words").innerText = underScore.join("  ");
document.getElementById("remainingGuesses").innerText = "Remaining Guesses: " + remainingLetters;
// create a prompt allowing user to start guessing
var guess;

function checkUserWordWithComputerWord(guess) {

  for (var index = 0; index < chooseWord.length; index++) {
    if (chooseWord[index].toLowerCase() === guess) {
      underScore[index] = guess;
    }

  }
  document.getElementById("words").textContent = underScore.join(" ");
}
// guess = prompt("hurry up and guess ya chicken, Press 'Enter' to prompt again");
// console.log(guess);
document.onkeyup = function (event) {
  guess = event.key.toLowerCase().toString();


  if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
    checkUserWordWithComputerWord(guess);




    //  alert("you fool!");

    if (underScore.indexOf("_") === -1) {
      alert("you did it, you are now a lawyer, to continue press any letter.")
      pointsWin++;
      startOver();
      document.getElementById("wins").innerText = "Wins: " + pointsWin;
      // answrArray[j]=guess;
      // Let player know if they picked a correct letter, display remaining chances to guess below
      // var rightGuess = prompt ("great job!");
      // var wrongGuess = prompt ("you fool!");
      // end of game reveal hidden word
      // alert(answrArray.join(" "));
      // alert that they have won
     



    }

    else {
      if (chooseWord.indexOf(guess) === -1) {
        if (wrongGuess.indexOf(guess) === -1) {
          remainingLetters--;
          wrongGuess.push(guess);
          document.getElementById("wrongGuess").innerText = "Wrong Guess: " + wrongGuess;

          document.getElementById("remainingGuesses").innerText = "Remaining Guesses: " + remainingLetters;
          if (remainingLetters === 0) {
            pointsLose++;
            alert("you lost and your client is dead, way to go! Press any key to continue")
            document.getElementById("losses").innerText = "Losses: " + pointsLose;
            startOver();
            //  alert that they have lost

          }
          else {
            alert("You fool!")
          }
        }
        else{
          alert(" you already chose " + guess + " dummy ")
        }
      }
      else {
        alert("great job!")
      }
    }







  }
  else {
    alert("Ya'll better put letters only")
  }


}
