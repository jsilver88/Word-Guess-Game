var words = ["hangover", "40 yeard old virgin", "superbad", "step brothers", "anchorman", "dodgeball", "wedding crashers", "old school", "elf", "tropic thunder", "mean girls", "meet the parents", "napoleon dynamite", "knocked up", "school of rock", "zoolander", "bruce almighty", "pineapple express", "forgetting sarah marshall","super troopers"]



var randomWord = "";
var wordLetters = []
var blanks = 0;
var blanksAndCorrect = [];
var guessWrong = [];
var wins = 0;
var losses = 0;
const guessesRemaining = 10;

// Game start

var game = () =>{
    randomWord = words[Math.floor(Math.random() * words.length)];

    wordLetters = randomWord.split("");

    blanks = wordLetters.length;

    for (var i = 0; i < blanks; i++){
        blanksAndCorrect.push("_");
    }


}