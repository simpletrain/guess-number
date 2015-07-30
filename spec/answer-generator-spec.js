'use strict';

var AnswerGenerator = require('../main/answer-generator.js');

describe('AnswerGenerator', function() {

  describe('#create()', function() {

    var answerGenerator, jugeRepeat;

    beforeEach(function() {
      answerGenerator = new AnswerGenerator();
      jugeRepeat = function(string) {
        var k = 0;
        for (var i = 0; i < string.length; i++) {
          for (var j = 0; j < string.length; j++) {
            if (string[i] === string[j]) {
              k++;
            }
          }
          if (k > 1) {
            return true;
          }
          k = 0;
        }
        return false;
      };
    });
    it('return a number', function() {
      var result = answerGenerator.create();
      for(var i = 0;i<result.length;i++){
        expect(isNaN(result[i])).toBe(false);
      }
    });

    it('return a 4 figures', function() {
      var result = answerGenerator.create();
      expect(result.length).toBe(4);
    });

    it('return a non-repeat number', function() {
      var result = answerGenerator.create();
      expect(jugeRepeat(result)).toBe(false);
    });

  });
});
