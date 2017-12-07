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
    promptPlayer = function() {
        inquirer.prompt([

        ])
    },
};

hangman.startGame();