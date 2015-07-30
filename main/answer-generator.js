'use strict';

function AnswerGenerator() {

}

AnswerGenerator.prototype.create = function() {
  var randomNumberString = '';
  var isRepeat;
  while (randomNumberString.length < 4) {
    var randomNumber = Math.floor(Math.random() * 10);
    isRepeat = false;
    if (randomNumberString.length === 0) {
      randomNumberString += randomNumber;
      continue;
    }
    for (var i = 0; i < randomNumberString.length; i++) {
      if (randomNumber === Number(randomNumberString[i])) {
        isRepeat = true;
      }
    }
    if (!isRepeat) {
      randomNumberString += randomNumber;
    }
  }
  return randomNumberString;
};

var hehe = new AnswerGenerator();
console.log(hehe.create());





module.exports = AnswerGenerator;
