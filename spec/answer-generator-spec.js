'use strict';

var AnswerGenerator = require('../main/answer-generator.js');

describe('AnswerGenerator', function() {

  describe('#create()', function() {

    var answerGenerator, jugeRepeat;

    beforeEach(function() {
      answerGenerator = new AnswerGenerator(Math);
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

    it('should a random number', function() {
      var count = 0;
      spyOn(Math, 'random').and.callFake(function() {
        var randomnumbers = [0.1, 0.1, 0.2, 0.3, 0.4];
        return randomnumbers[count++];
      });
      var result = answerGenerator.create();
      expect(result).toBe('1234');
    });

    it('length should be 4', function() {
      var result = answerGenerator.create();
      expect(result.length).toBe(4);
    });

    it('each digit should not be repeat', function() {
      var result = answerGenerator.create();
      expect(jugeRepeat(result)).toBe(false);
    });

  });
});
