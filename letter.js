//Should eiteher display an underlying character, or a blank placeholer (such as an underscore)

var Letter = function(guess) {
    //letter guessed
    this.wordLetter = guess;
    //whether or not letter has been guessed
    this.showLetter = false;

    this.letterAppear = function () {
        //if there is blank in the word, then shoes up as blank
        if (this.wordLetter === ' ') {
            this.showLetter = true;
            return ' ';
            console.log(this.showLetter);
        }

        //shows blank or letter
        if (this.showLetter === false) {
            return '_';
        } else {
            return this.wordLetter;
        }
    };
};

exports.Letter = Letter;