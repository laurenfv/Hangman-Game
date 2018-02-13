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


//takes the length and spits out underscores as placeholders
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
            //gets the index of the letters, changes spaces[i] to be the letter instead of underscore
            for (i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    spaces[i] = letter;
                    //update HTML with spaces in place of commas
                    document.getElementById("letters").innerHTML = spaces.join(" ");
                }
            }
        }
        else {
            //otherwise update incorrect guesses unless the letter has already been guessed
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
        
        //increases counter
        winsCounter++;

        //updates HTML
        document.getElementById("wins").innerHTML = winsCounter;
        
        //waits 1 second before reseting game to the last letter can appear on screen
        setTimeout(function(){
            reset()
        }, 1000);

    }
}


//keyup event and callback
document.onkeyup = function(event) {
    
    //store keycode/ store letter/ increase counter
    pressedN = event.keyCode;
    pressedK = event.key;
    counter++;

    //if it's the first key pressed, it can be any key to start the game
    if (counter === 1) {
        document.getElementById("letters").innerHTML = spaces.join(" ");
        
    }
    //otherwise only letters are allowed to be pressed
    else if (pressedN < 40 || pressedN > 90){
        alert("Please select a letter.");
    }
    //calls functions to get switch letters with underscores, handle a win, and handle a loss
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
        //reset game
        reset();
    }
    else {
        //update HTML
        document.getElementById("counter").innerHTML = numberOfGuesses;
    }
  }


//resets stats in game except games won
var reset = function (){

    //reset stats
    counter = 2;
    numberOfGuesses = 12;
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

