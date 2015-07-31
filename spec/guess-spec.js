'use strict';

var Guess = require('../main/guess.js');
var AnswerGenerator = require('../main/answer-generator.js');
var CompareNumber = require('../main/compare-number');

describe('Guess', function() {

  describe('#guessWhat()', function() {

    describe('unit-spec', function() {
      it('should return right result', function() {
        var answerGenerator = new AnswerGenerator();
        spyOn(answerGenerator, 'create').and.returnValue('1243');

        var compareNumber = new CompareNumber();
        spyOn(compareNumber, 'compare').and.callFake(function(answer, input) {
          if (answer === '1243' && input === '1234') {
            return '2A2B';
          }
        });

        var guess = new Guess(answerGenerator, compareNumber);
        expect(guess.guessWhat('1234')).toBe('2A2B');
      });
    });

    describe('integration-spec', function() {
      beforeEach(function() {
        var count = 0;
        spyOn(Math, 'random').and.callFake(function() {
          var randomnumbers = [0.2, 0.4, 0.5, 0.5, 0.1];
          return randomnumbers[count++];
        });
      });

      it('should return 0A0B', function() {
        var answerGenerator = new AnswerGenerator(Math);
        var compareNumber = new CompareNumber();
        var guess = new Guess(answerGenerator, compareNumber);
        expect(guess.guessWhat('7980')).toBe('0A0B');
      });

      it('should return 4A0B', function() {
        var answerGenerator = new AnswerGenerator(Math);
        var compareNumber = new CompareNumber();
        var guess = new Guess(answerGenerator, compareNumber);
        expect(guess.guessWhat('2451')).toBe('4A0B');
      });

      it('should return 0A4B', function() {
        var answerGenerator = new AnswerGenerator(Math);
        var compareNumber = new CompareNumber();
        var guess = new Guess(answerGenerator, compareNumber);
        expect(guess.guessWhat('1542')).toBe('0A4B');
      });


    });
  });
});
