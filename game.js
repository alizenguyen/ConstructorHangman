//Runs the game

var wordBank = require('./wordbank.js');
var wordLogic = require('./word.js');
var letter = require('./letter.js');
var inquirer = require('inquirer');

console.log('\n');
console.log('********************************************************************');
console.log('\n');
console.log('WELCOME TO AVENGER HANGMAN! GUESS THE RIGHT AVENGER SUPERHERO!');
console.log('\n');
console.log('********************************************************************');
console.log('\n');

var hangman = {
    guessesLeft: 10,
    lettersGuessed: '',
    wordChosen: null,
    startGame: function(word) {
        this.guessesLeft = 10;
        //pulls word from wordbank
        this.wordChosen = new wordLogic.wordLogic(wordBank);
            //console.log(this.wordChosen);
        //splits word into an array of letters
        this.wordChosen.splitWord();
        //beins prompting player
        
        console.log(this.lettersGuessed);
        console.log('Result: ' + this.wordChosen.wordGuessResult());
        console.log('\n');

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

            //console.log(this.lettersGuessed);
            this.lettersGuessed += answer.guessPrompt.toString() + ", ";
            //console.log('You Guessed: ' + answer.guessPrompt);
            //console.log(this.lettersGuessed);
            
            console.log('-------------------------------------------------------------------');
            var guessResult = referred.wordChosen.letterFound(answer.guessPrompt);
            //console.log(guessResult);
            console.log('-------------------------------------------------------------------');

            if (guessResult === 0) {
                console.log('Nice Try. Guess again!')
                referred.guessesLeft -= 1; 
                console.log(referred.guessesLeft);
            } else if (guessResult !== 0) {
                console.log('Atta Boy/Girl! You guessed correct!')
                console.log('-------------------------------------------------------------------');

                if (referred.wordChosen.checkWordGuess()) {
                    console.log('-------------------------------------------------------------------');
                    console.log('\n');
                    console.log('Answer: ' + referred.wordChosen.word)
                    console.log('YOU WON! I NEVER DOUBTED YOU.');
                    console.log('Thanks for playing!');
                    console.log('\n');
                    console.log('-------------------------------------------------------------------');
                    console.log('-------------------------------------------------------------------');
                    return; 
                }; 
            };

            console.log('-------------------------------------------------------------------');
            console.log('\n');
            console.log('Guesses remaining: ', referred.guessesLeft);
            console.log('\n');
            console.log('Result: ' + referred.wordChosen.wordGuessResult());
            console.log('\n');
            console.log('Letters you have guessed: ' + this.lettersGuessed);
            console.log('\n');
            console.log('-------------------------------------------------------------------');

            if ((referred.guessesLeft > 0) && (referred.wordChosen.correct === false)){
		    	referred.promptPlayer();
            } else if (referred.guessesLeft === 0) {
                console.log('\n');
                console.log("I'm getting Bored. The word was '" + referred.wordChosen.word + "'. Next time!");
                console.log('\n');
                console.log('-------------------------------------------------------------------');
            } else {
                console.log(referred.wordChosen.wordGuessResult())
                console.log('-------------------------------------------------------------------');
            }

        });
    },
};

hangman.startGame();