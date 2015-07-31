'use strict';

function Guess(answerGenerator, compareNumber) {
    this.answer = answerGenerator.create();
    this.compareNumber = compareNumber;
}

Guess.prototype.guessWhat = function (input) {
    return this.compareNumber.compare(this.answer, input);
};


module.exports = Guess;
