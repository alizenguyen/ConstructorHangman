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
        console.log(this.letterArray);
    };

    //Check if word is guessed
    this.checkWordGuess = function() {
        var letterRight = 0;

        for (var i = 0; i < this.letterArray.length; i++) {
            if (this.leterArray[i].showLetter === true) {
                letterRight++;
            }
            else {
                return false;
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
    this.letterFound = function (guess) {
        for (var i = 0; i < this.lets.length; i++) {
            if (this.letterArray[i].wordLetter === guess) {
                 this.lets[i].showLetter = true;
            }
       }
    };   
};

var batman = new wordLogic('batman');
console.log(batman);

batman.splitWord();