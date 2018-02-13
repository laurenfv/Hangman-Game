var winsCounter = 0;
var computersChoice;
var wordBank = ["sun", "mercury", "venus", "earth", "mars", "saturn", "jupiter", "neptune", "uranus", "pluto", "comet", "star", "supernova", "galaxy", "universe", "titan", "moon", "orbit", "vacuum", "asteroid", "planet", "telescope", "nasa", "gravity", "atmosphere", "aliens", "scully", "mulder"];
var numberOfGuesses = 12;
var wordLength;
var spaces = [];
var pressedN;
var pressedK;
var counter = 0;
var incorrectGuesses = [];
var underscore = "_";

var init = function() {
    //randomly select a word
    computersChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
    //update HTML
    document.getElementById("counter").innerHTML = numberOfGuesses;
    document.getElementById("wins").innerHTML = winsCounter;
    //get the word's length
    wordLength = computersChoice.length;
}

init();


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
        // else if (counter == 3 && incorrectGuesses.indexOf(letter) > -1){
        //     break;
        // }
        else {
            if (incorrectGuesses.indexOf(letter) === -1){
                incorrectGuesses.push(letter);
                numberOfGuesses--;
                document.getElementById("guessed").innerHTML = incorrectGuesses.join(" ");
            }
        }
    return spaces;
    return incorrectGuesses;
}

//handles wins
var wordSolved = function(char, word) {
    if (word.indexOf(char) === -1) {
        winsCounter++;
        document.getElementById("wins").innerHTML = winsCounter;
        setTimeout(function(){reset()}, 1000);
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

    //reset stats
    counter = 2;
    numberOfGuesses = 13;
    computersChoice = "";
    spaces = [];
    incorrectGuesses = [];
    wordlength = 0;

    //initialize game
    init();
    makeBlanks();

    //reset the HTML
    document.getElementById("letters").innerHTML = spaces.join(" ");
    document.getElementById("guessed").innerHTML = incorrectGuesses.join(" ");
}

