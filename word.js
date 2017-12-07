var letter = require('./letter.js');

var wordLogic = function(currentWord) {
    //word to guess
    this.word = currentWord;
    //array of letters from the current word
    this.letterArray = [];
    this.correct = false;

    //function to break word into letter
    this.splitWord = function() {
        for (var i = 0; i < this.word.length; i++) {
            this.letterArray.push(new letter.Letter(this.word[i]));
        };
        //console.log(this.letterArray);
    };

    //Check if word is guessed to end game
    this.checkWordGuess = function() {
        var letterRight = 0;

        for (var i = 0; i < this.letterArray.length; i++) {
            if (this.letterArray[i].showLetter === true) {
                letterRight += 1;
            }
        };

        if (letterRight === this.letterArray.length) {
            this.correct = true;   
        } else {
            this.correct = false;
        };

        return this.correct;
    };

    //Checks if letter is found and turns showLetter in letter constructor to true
    this.letterFound = function (guessPrompt) {
        var numberFound = 0;
        for (var i = 0; i < this.letterArray.length; i++) {
            if (this.letterArray[i].wordLetter === guessPrompt) {
                this.letterArray[i].showLetter = true;
                numberFound += 1;
            };
       };
       //returns the number of letters found
       return numberFound;
    };
    
    //puts word and letter guessed together
    this.wordGuessResult = function () {
        var line = '';
        for (var i = 0; i < this.letterArray.length; i++) {
            line += this.letterArray[i].letterAppear();
       };
       return line;
    };
};

exports.wordLogic = wordLogic;