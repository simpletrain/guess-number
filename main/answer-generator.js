'use strict';

function AnswerGenerator(math) {
    this.Math = math;
}

AnswerGenerator.prototype.create = function () {
    var randomNumberString = '';
    while (randomNumberString.length < 4) {
        var randomNumber = this.Math.floor(this.Math.random() * 10);
        if (randomNumberString.indexOf('' + randomNumber) === -1) {
            randomNumberString += randomNumber;
        }
    }
    return randomNumberString;
};

module.exports = AnswerGenerator;
