const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
    it('runs fizzBuzz with the number 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });
    it('runs fizzBuzz with the number 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });
    it('runs fizzBuzz with the number 8', () => {
        expect(fizzBuzz(8)).toBe(8);
    });
    it('runs fizzBuzz with the number 15', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
    it('runs fizzBuzz with the number 18', () => {
        expect(fizzBuzz(18)).toBe('Fizz');
    });
    it('runs fizzBuzz with the number 20', () => {
        expect(fizzBuzz(20)).toBe('Buzz');
    });
});