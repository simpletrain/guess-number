'use strict';

function CompareNumber() {
  this.a = 0;
  this.b = 0;
}

CompareNumber.prototype.compare = function(answer, input) {
  for (var i = 0; i < input.length; i++) {
    this.findInAnswer(answer, input[i], i);
  }
  return (this.a + 'A' + this.b + 'B');
};

CompareNumber.prototype.findInAnswer = function(answer, number, index) {
  for (var i = 0; i < answer.length; i++) {
    if (number === answer[i]) {
      if (index === i) {
        this.a++;
      } else {
        this.b++;
      }
    }
  }
};

module.exports = CompareNumber;
