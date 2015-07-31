'use strict';

function AnswerGenerator(math) {
  this.Math = math;
}

AnswerGenerator.prototype.create = function() {
  var randomNumberString = '';
  var isRepeat;
  while (randomNumberString.length < 4) {
    var randomNumber = this.Math.floor(this.Math.random() * 10);
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






module.exports = AnswerGenerator;
