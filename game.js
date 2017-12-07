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
            console.log(answer.guessPrompt);
            
            var guessResult = referred.wordChosen.letterFound(answer.guessPrompt);
            console.log(guessResult);

            if (guessResult === 0) {
                console.log('Nice Try. Guess again!')
                referred.guessesLeft -= 1; 
                console.log(referred.guessesLeft);
            } else {
                console.log('Atta Boy!')
            }
        });
    },
};

hangman.startGame();