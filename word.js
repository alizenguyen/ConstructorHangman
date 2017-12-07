var letter = require('./letter.js');

var wordLogic = function(currentWord) {
    this.word = currentWord;
    this.letterArray = [];
    this.correct = false;

    //function to break word into letter
    this.splitWord = function() {
        for (var i = 0; i < this.word.length; i++) {
            this.letterArray.push(this.word[i]);
            console.log(this.letterArray);
        };
    };

    //Check if letter is correct 
    this.checkLetter = function (guess) {
        for (var i =0; i < this.word.length; i++) {
            if (this.word[i] === guess) {
                this.correct = true;
            };
        };
    };
};

var batman = new wordLogic('batman');
console.log(batman);

batman.splitWord();