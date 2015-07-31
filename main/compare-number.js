'use strict';

function CompareNumber() {

}

CompareNumber.prototype.compare = function (answer, input) {
    var countA = 0;
    var countB = 0;

    for (var i = 0; i < input.length; i++) {
        var numberIndex = answer.indexOf(input[i]);

        if (numberIndex === i) {
            countA++;
        } else if (numberIndex !== -1) {
            countB++
        }
    }
    return (countA + 'A' + countB + 'B');
};


module.exports = CompareNumber;
