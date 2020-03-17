$(document).ready(function() {

var wordList = ["hangover", "superbad", "stepbrothers", "anchorman", "dodgeball", "weddingcrashers", "oldschool", "elf", "tropicthunder", "meangirls", "meettheparents", "napoleondynamite", "knockedup", "schoolofrock", "zoolander", "brucealmighty", "pineappleexpress", "supertroopers"];

var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

// Game counters
var wins = 0;
var losses = 0;
var numGuesses = 9;

function startGame() {
    numGuesses = 9;

    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;

    console.log(chosenWord);

    blanksAndSuccesses = [];
    wrongGuesses = [];

    for (var i = 0; i < numBlanks; i++){
        blanksAndSuccesses.push("_");
    }
    
    console.log(blanksAndSuccesses);

    document.getElementById("guesses-remaining").innerHTML = numGuesses;
    document.getElementById("guess-word").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("letters-wrong").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < numBlanks; i++){
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var j = 0; j < numBlanks; j++){
            if (chosenWord[j] === letter){
                blanksAndSuccesses[j] = letter;
            }
        }
        console.log(blanksAndSuccesses);
    } else {
        wrongGuesses.push(letter);
        numGuesses--;
    }
}

function roundComplete() {
    console.log("Wins: " + wins + " | Losses: " + losses + " | NumGesses: " + numGuesses);

    document.getElementById("guesses-remaining").innerHTML = numGuesses;
    document.getElementById("guess-word").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("letters-wrong").innerHTML = wrongGuesses.join(" ");

    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
        wins++;
        alert("You win!");

        document.getElementById("wins").innerHTML = wins;
        startGame();
    } else if (numGuesses === 0) {
        losses++;
        alert("You lose");

        document.getElementById("losses").innerHTML = losses;
        startGame();
    }
    
}

startGame();

document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var letterGuessed = event.key.toLowerCase();
        checkLetters(letterGuessed);
        roundComplete();
    }
};







})