let prices = [1, 2, 3, 4, 5, 6];
// prices.push('asd') incorrect
// prices.push(true) incorrect
prices.push(10);

let pricesTwo = [11, 12, 13, 'asd', true];
pricesTwo.push(false);

let pricesThree: (number | string | boolean)[] = ['Initial', false]
pricesThree.push(100);
// pricesThree.push({}) not possible due to typing

// Everything is an object in JS, so this must be handled differently
let pricesFour: Object[] = [{}, {}]
pricesFour.push([])

let numbers = [10, 9, 8, 7];
// we can safely perform math operations knowing this array is of type number[]
numbers.map(number => number * 2);

let incorrectNumbers = ['1', '2', '3']
incorrectNumbers.map(number => number *2);
