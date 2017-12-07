//Runs the game

var wordBank = require('./wordbank.js');
var inquirer = require('inquirer');
var guessesLeft = 10;
var lettersGuessed = '';
var currentWord;

console.log('-------------------------------------------------------------------');
console.log('WELCOME TO AVENGER HANGMAN! GUESS YOUR THE RIGHT AVENGER SUPERHERO!');
console.log('-------------------------------------------------------------------');

function startGame(word) {
    guessesLeft = 10;
    lettersGuessed = '';
    currentWord = wordBank;
    console.log(wordBank);
    this.currentWord.splitWord();
}

startGame();