// create a list of words
var words =['pizza', 'burgers','hotwings','tacos','putine','breakfast'];
// computer will choose words randomly
var computerChoice = Math.floor(Math.random()* words.length);
var chooseWord= words[computerChoice];
var rightGuess=[];
var wrongGuess=[];
var underScore =[];
console.log(chooseWord);


// create a proper ammount of underscores based on lenght of word
var generateunderScore = () =>{
  for(var i = 0; i < chooseWord.length; i++){  
  underScore.push("_");
}
 return underScore;
  
}

console.log(generateunderScore());

// let user guess
 var guess = prompt ("hurry up and guess ya chicken");
 console.log (prompt);
if {
  for (var [j]===guess){i
  
  answrArray[j]=guess;
// Let player know if they picked a correct letter, display remaining chances to guess below
  var rightGuess = prompt ("great job!");
  var wrongGuess = prompt ("you fool!");
    remainingLetters--;
}

  
}
  
    // end of game reveal hidden word
  alert(answrArray.join(" "));
  // alert that they have won
  alert("you did it, you are now a laweyer")
  //  alert that they have lost
  alert("you lost and your client is dead, way to go!")