var winsCounter = 0;
var wordBank = ["sun", "mercury", "venus", "earth", "mars", "saturn", "jupiter", "neptune", "uranus", "pluto", "comet", "star", "supernova", "galaxy", "universe", "titan", "moon", "orbit", "vacuum", "asteroid", "planet", "telescope", "nasa", "gravity", "atmosphere", "aliens", "scully", "mulder"];
var lettersGuessed = 0;
var numberOfGuesses = 13;
var wordLength;
var spaces = [];
var pressedN;
var pressedK;
var correctGuesses = [];
var counter = 0;
var incorrectGuesses = [];
var underscore = "_";

// var init = function {

// }

//randomly select a word
var computersChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
document.getElementById("counter").innerHTML = numberOfGuesses;


//get the word's length
wordLength = computersChoice.length;

//function that takes the length and spits out underscores as placeholders
var makeBlanks = function(string) {
    for (i = 0; i < wordLength; i++){
        spaces.push("_");
    }
    return spaces;
}
 
var getPositionOfLetters = function(letter, word) {
    
        if (word.indexOf(letter) > -1) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    spaces[i] = letter;
                    document.getElementById("letters").innerHTML = spaces.join(" ");
                }
            }
        }
        else {
            incorrectGuesses.push(letter);
            numberOfGuesses--;
            console.log(numberOfGuesses);
            document.getElementById("guessed").innerHTML = incorrectGuesses.join(" ");
        }
    return spaces;
    return incorrectGuesses;
}

var wordSolved = function(underscore, spaces) {
    if (spaces.indexOf(underscore) == -1) {
        alert("you win!");
    }
}



makeBlanks();


//keyup event and callback
document.onkeyup = function(event) {
    pressedN = event.keyCode;
    pressedK = event.key;
    counter++;

    if (counter === 1) {
        document.getElementById("letters").innerHTML = spaces.join(" ");
        
    }
    else if (pressedN < 40 || pressedN > 90){
        alert("Please select a letter.");
    }
    else{
        getPositionOfLetters(pressedK, computersChoice);
        console.log(pressedK);
        handleTries();
        // wordChecker(pressedK, computersChoice);
        // console.log(accumulator);
    }
    
    return pressedK;
        
  };

  var handleTries = function() {
    if (numberOfGuesses === 0) {
        alert("You lost!");
    }
    else {
        document.getElementById("counter").innerHTML = numberOfGuesses;
    }
  }


//   getPositionOfLetters(pressedK, computersChoice);


// //checks if word is completed and if it does ends game - goes to reset function
// do (var bool = computersChoice.includes(spaces)) {

//     bool = computersChoice.includes(spaces)
// } while (bool === false)

// for (i = 0; i )

//countdown how many guesses/doesnt count down for same letter by checking for what is stored in the array

//displays letters already guessed from stored array

//resets stats in game except games won

