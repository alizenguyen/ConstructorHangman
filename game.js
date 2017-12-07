//Runs the game

var wordBank = require('./wordbank.js');
var wordLogic = require('./word.js');
var letter = require('./letter.js');
var inquirer = require('inquirer');

console.log('-------------------------------------------------------------------');
console.log('WELCOME TO AVENGER HANGMAN! GUESS YOUR THE RIGHT AVENGER SUPERHERO!');
console.log('-------------------------------------------------------------------');

var hangman = {
    guessesLeft: 10,
    lettersGuessed: '',
    wordChosen: null,
    startGame: function(word) {
        this.guessesLeft = 10;
        //pulls word from wordbank
        this.wordChosen = new wordLogic.wordLogic(wordBank);
        //splits word into an array of letters
        this.wordChosen.splitWord();
        //beins prompting player
        this.promptPlayer();
    },
    promptPlayer: function() {
        var referred = this; 
        inquirer.prompt([
            {    
                name: "guessPrompt",
                message: "Guess a letter!"
            }
        ]).then(function(answer) {
            this.lettersGuessed += answer.guessPrompt;
            console.log('You Guessed: ' + answer.guessPrompt);
            console.log(this.lettersGuessed);
            
            console.log('-------------------------------------------------------------------');
            var guessResult = referred.wordChosen.letterFound(answer.guessPrompt);
            console.log(guessResult);
            console.log('-------------------------------------------------------------------');

            if (guessResult === 0) {
                console.log('Nice Try. Guess again!')
                referred.guessesLeft -= 1; 
                console.log(referred.guessesLeft);
            } else if (guessResult !== 0) {
                console.log('Atta Boy!')

                if (referred.wordChosen.correct === true) {
                    console.log('You Won!!!');
                    return; 
                }; 
            };

            console.log('-------------------------------------------------------------------');
            console.log('\n');
            console.log('Guesses remaining: ', referred.guessesLeft);
            console.log('\n');
            console.log('Result: ' + referred.wordChosen.wordGuessResult());
            console.log('\n');
            console.log('Letters you have guessed: ' + lettersGuessed);
            console.log('\n');
            console.log('-------------------------------------------------------------------');

            if ((referred.guessesLeft > 0) && (referred.wordChosen.correct === false)){
		    	referred.promptPlayer();
            } else if (referred.guessesLeft === 0) {
                console.log("Enough Guesses. I'm getting Bored. The word was " + referred.wordChosen + ". Next time!")
                console.log('-------------------------------------------------------------------');
            }

        });
    },
};

hangman.startGame();