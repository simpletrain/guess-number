'use strict';

function CompareNumber() {

}

CompareNumber.prototype.compare = function(answer, input) {
  var a = 0,b = 0;
  var findInAnswer = function(answer, number, index) {
    for (var i = 0; i < answer.length; i++) {
      if (number === answer[i]) {
        if (index === i) {
          a++;
        } else {
          b++;
        }
      }
    }
  };
  for (var i = 0; i < input.length; i++) {
    findInAnswer(answer, input[i], i);
  }
  return (a + 'A' + b + 'B');
};




module.exports = CompareNumber;
