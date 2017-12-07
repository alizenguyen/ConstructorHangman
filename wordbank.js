//Wordbank that user can guess from

var wordBank = ['thor', 'iron man', 'hulk', 'hawkeye', 'black widow', 'captain america', 'spiderman'] ;
var random = Math.floor(Math.random() * wordBank.length);
var randomWord = wordBank[random];

module.exports = randomWord;