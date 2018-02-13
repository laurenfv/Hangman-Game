var winsCounter = 0;
var computersChoice;
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

var init = function() {
    //randomly select a word
    computersChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
    document.getElementById("counter").innerHTML = numberOfGuesses;
    document.getElementById("wins").innerHTML = winsCounter;
    //get the word's length
    wordLength = computersChoice.length;
}

// //randomly select a word
// var computersChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
// document.getElementById("counter").innerHTML = numberOfGuesses;
// document.getElementById("wins").innerHTML = winsCounter;
init();


//get the word's length
// wordLength = computersChoice.length;

//function that takes the length and spits out underscores as placeholders
var makeBlanks = function(string) {
    for (i = 0; i < wordLength; i++){
        spaces.push("_");
    }
    return spaces;
}

makeBlanks();

//get position of letters, updates incorrect guesses
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
            document.getElementById("guessed").innerHTML = incorrectGuesses.join(" ");
        }
    return spaces;
    return incorrectGuesses;
}

//handles wins
var wordSolved = function(char, word) {
    if (word.indexOf(char) === -1) {
        winsCounter++;
        document.getElementById("wins").innerHTML = winsCounter;
        reset();
    }
}


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
        wordSolved(underscore, spaces);
        handleTries();
        // wordChecker(pressedK, computersChoice);
        // console.log(accumulator);
    }
    
    return pressedK;
        
  };

  //handles losses
  var handleTries = function() {
    if (numberOfGuesses === 0) {
        reset();
    }
    else {
        document.getElementById("counter").innerHTML = numberOfGuesses;
    }
  }


//resets stats in game except games won
var reset = function (){
    counter = 2;
    numberOfGuesses = 13;
    lettersGuessed = [];
    computersChoice = "";
    spaces = [];
    incorrectGuesses = [];
    wordlength = 0;
    init();
    makeBlanks();
    document.getElementById("letters").innerHTML = spaces.join(" ");
    document.getElementById("guessed").innerHTML = incorrectGuesses.join(" ");
}

