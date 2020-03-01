



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
    console.log(blankWord);
    // created loop to generate _ for every letter
    for (var i = 0; i < blankWord; i++){
        if(letters[i] === " "){
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
    document.addEventListener("keyup", handleUserGuess)
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


let reset = () => {
    guessesRemaining = 10;
    guessWrong = [];
    blankWordCorrect = [];
    game ()
}
game();