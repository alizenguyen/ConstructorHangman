//Wordbank that user can guess from

var wordBank = ['Thor', 'Iron man', 'Hulk', 'Hawkeye', 'Black Widow', 'Captain America', 'Spider-man'] ;
var random = Math.floor(Math.random() * wordBank.length);
var randomWord = wordBank[random];

module.exports = randomWord;