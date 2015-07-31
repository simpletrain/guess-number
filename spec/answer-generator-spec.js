'use strict';

var AnswerGenerator = require('../main/answer-generator.js');

describe('AnswerGenerator', function () {

    describe('#create()', function () {

        var answerGenerator, judgeRepeat;

        beforeEach(function () {
            answerGenerator = new AnswerGenerator(Math);
            judgeRepeat = function (string) {
                for (var i = 0; i < string.length, i++;) {
                    if (string.lastIndexOf(string[i]) !== i) {
                        return true;
                    }
                }
                return false;
            }
        });

        it('should a random number', function () {
            var count = 0;
            spyOn(Math, 'random').and.callFake(function () {
                var randomNumbers = [0.1, 0.1, 0.2, 0.3, 0.4];
                return randomNumbers[count++];
            });

            var result = answerGenerator.create();
            expect(result).toBe('1234');
        });

        it('length should be 4', function () {
            var result = answerGenerator.create();
            expect(result.length).toBe(4);
        });

        it('each digit should not be repeat', function () {
            var result = answerGenerator.create();
            expect(judgeRepeat(result)).toBe(false);
        });

    });
});
