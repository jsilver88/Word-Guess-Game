var movies = ["hangover", "superbad", "step brothers", "anchorman", "dodgeball", "wedding crashers", "old school", "elf", "tropic thunder", "mean girls", "meet the parents", "napoleon dynamite", "knocked up", "school of rock", "zoolander", "bruce almighty", "pineapple express", "forgetting sarah marshall","super troopers"]



var randomMovie = "";
var letters = []
var blankWord = "";
var blankWordCorrect = [];
var guessWrong = [];
var wins = 0;
var losses = 0;
const guessesRemaining = 10;

// START GAME!


let chooseWord = () =>{
    randomMovie = movies[Math.floor(Math.random() * movies.length)];

}

let generateUserGuess = () =>{
    letters = randomMovie.split("");
    // stores length of the blank word
    blankWord = letters.length;
    // created loop to generate _ for every letter
    for (var i = 0; i < blankWord; i++){
        if(blankWord[i] === " "){
            blankWordCorrect.push(" ");

        } else {
            blankWordCorrect.push("_");
            
        }
    }

}

let updateUserGuess = () =>{
    document.getElementById("guess-word").innerHTML = " " + blankWordCorrect.join(" ");

}

let addKeyListener = () =>{
    document.addEventListener("keydown", handleUserGuess)
}
let game = () =>{
    
    chooseWord();
    generateUserGuess();
    updateUserGuess();
    addKeyListener();
    

}

function handleUserGuess(event){
    console.log(event.key)
    let currentGuess = event.key
    for (var i = 0; i < randomMovie.length; i++){
        if (currentGuess === randomMovie[i]){
            console.log("correct.");
            console.log(randomMovie);
            handleCorrectGuess(i, currentGuess)
        } else {
            console.log("incorrect.");
            // handle incorrect guess
        }
    }
    updateUserGuess();
}

let handleCorrectGuess = (index, userGuess) =>{
    for (var i = 0; i < blankWordCorrect.length; i++){
        if (i === index){
            blankWordCorrect[i] = userGuess
        }
    }
}

const reset = () => {
    guessesRemaining = 10;
    guessWrong = [];
    blanksWordCorrect = [];
    game ()
}

game();

/**
 * HTML elements: Wins, losses, user guess, guesses remaining, letters already guessed
 * 
 * Start game button
 * On click:
 * Add keyup eventlistener
 * Choose a random word from array of available words
 *  wordBank, word, userGuess
 * Generate a string of _ _ based on the amount of letters in the word
 *  for loop append _ for each character in the 'word' variable
 * Render _ _ string on the guess page for user to see
 *  append value of userGuess to HTML
 * 
 * After user presses a key
 * 
 * Check to see if guessed letter is in answer string
 * In a for loop, check each letter
 * Does current letter = user guess
 * If true: At the index of a match, we convert _ into letter that is guessed.
 * If false: push letter into guessed wrong and decrease guesses remaining by 1
 * Check for win or lose
 * 
 * Win all letters in the word game is over
 * Lose when guesses remaining reaches 0
 */