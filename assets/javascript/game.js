var winsCounter = 0;
var wordBank = ["sun", "mercury", "venus", "earth", "mars", "saturn", "jupiter", "neptune", "uranus", "pluto", "comet", "star", "supernova", "galaxy", "universe", "titan", "moon", "orbit", "vacuum", "asteroid", "planet", "telescope", "nasa", "gravity", "atmosphere", "aliens", "skully", "mulder"];
var lettersGuessed = 0;
var numberOfGuesses = 13;
var wordLength;
var spaces = [];
var pressedN;
var pressedK;
var pressedDisplay = [];
var correctGuesses = [];
var counter = 0;
var incorrectGuesses = [];

    //randomly select a word
    var computersChoice = wordBank[Math.floor(Math.random() * wordBank.length)];


//get the word's length
wordLength = computersChoice.length;

//function that takes the length and spits out underscores as placeholders
var makeBlanks = function(string) {
    for (i = 0; i < wordLength; i++){
        spaces.push("_");
    }
    return spaces;
}

// //checks letters for matches/records what letter into an array/replaces spaces with letters
// var wordChecker2 = function(letter, word){
//     var accumulator = [];
//     for (i = 0; i < word.length; i++){
//         if (word.indexOf(letter) > -1){
//             accumulator.push(word.indexOf(letter));
//             word.replace("_",letter);
//         }
//         else {
//             return accumulator;    
//         }
//     }
// }

// var getPositionOfLetters = function(letter, word) {
//     var accumulator = [];
//     var lessWord = word;
//     for (i = 0; i < lessWord.length; i++) {
//         if (lessWord.indexOf(letter) > -1) {
//             accumulator.push(lessWord.indexOf(letter));
//             lessWord.pop(lessWord.indexOf(letter));
//         }
//     }
//     return accumulator;
// }

// var getPositionOfLetters = function(letter, word) {
//     var accumulator = [];
//     for (i = 0; i < (word.indexOf(letter) > -1).length; i++) {
//         accumulator.push(word.indexOf(letter));
//     }
//     return accumulator;
// }

// var getPositionOfLetters = function(letter, word) {
//     for (i = 0; i < word.length; i++) {
//         if (word.indexOf(letter) > -1) {
//             if (word[i] === letter) {
//                 spaces[i] = letter;
//                 document.getElementById("letters").innerHTML = spaces;
//             }
//         }
//         else {
//             accumulator.push(letter);
//         }
//     }
//     return spaces;
//     return accumulator;
// }

var getPositionOfLetters = function(letter, word) {
    
        if (word.indexOf(letter) > -1) {
            for (i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    spaces[i] = letter;
                    document.getElementById("letters").innerHTML = spaces.join(" ");
                }
        }   }
        else {
            incorrectGuesses.push(letter);
        }
    return spaces;
    return incorrectGuesses;
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
        pressedDisplay.push(pressedK);
        getPositionOfLetters(pressedK, computersChoice);
        console.log(pressedK);
        console.log(pressedDisplay);
        // wordChecker(pressedK, computersChoice);
        // console.log(accumulator);
    }
    
    return pressedDisplay;
    return pressedK;
        
  };

//   getPositionOfLetters(pressedK, computersChoice);



// //checks if word is completed and if it does ends game - goes to reset function
// do (var bool = computersChoice.includes(spaces)) {

//     bool = computersChoice.includes(spaces)
// } while (bool === false)

// for (i = 0; i )

//countdown how many guesses/doesnt count down for same letter by checking for what is stored in the array

//displays letters already guessed from stored array

//resets stats in game except games won

