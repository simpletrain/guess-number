'use strict';

var _ = require('lodash');

function AnswerGenerator() {

}

AnswerGenerator.prototype.create = function () {
    var randomNumberString = '';
    while (randomNumberString.length < 4) {
        var randomNumber = _.random(0,9);
        if (randomNumberString.indexOf('' + randomNumber) === -1) {
            randomNumberString += randomNumber;
        }
    }
    return randomNumberString;
};

module.exports = AnswerGenerator;
