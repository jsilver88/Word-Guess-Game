$(document).ready(function() {
    var movies = ["hangover", "superbad", "step brothers", "anchorman", "dodgeball", "wedding crashers", "old school", "elf", "tropic thunder", "mean girls", "meet the parents", "napoleon dynamite", "knocked up", "school of rock", "zoolander", "bruce almighty", "pineapple express", "forgetting sarah marshall","super troopers"]



    var randomMovie = "";
    var letters = []
    var blankWord = [];
    var guessedLetters = [];
    var wins = 0;
    var losses = 0;
    var guessCount = 10;
    var finishedGame = false;

    // sets a movie from movie array into randomMovie
    randomMovie = movies[Math.floor(Math.random() * movies.length)];
    console.log(randomMovie);

    // iterating over randomMovie and setting it to blankWord index
    randomMovie.split("").forEach(function(letter, i){
        blankWord[i] = "_"; 
    });
    // setting the blank word to html 
    $("#guess-word").text(blankWord.join(" "));
    console.log(blankWord.join(" "));
    // when user presses a key run code e = event
    $("body").on("keyup", function(e){
        console.log(randomMovie.includes(e.key));
        console.log(e.key);
        

        // If movie includes the pressed key
        if (randomMovie.includes(e.key)){
            console.log("correct guess.")

            randomMovie.split("").forEach(function(letter, i){
                console.log("On iteration " + i + " the letter is " + letter);
                if (letter === e.key){
                    blankWord[i] = letter;
                    $("#guess-word").text(blankWord.join("")); //updating HTML with blankWord
                    console.log(blankWord);
                } 
                
                
                
            });
            if (blankWord.join("") === randomMovie){
                wins++
                $("#wins").text(wins);
            } 

            
        } else {
            console.log("incorrect guess.");
            guessCount--
            letters.push(e.key);
            $("#letters-wrong").text(letters);
            $("#guesses-remaining").text(guessCount);
        }; 
    });


   

});






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