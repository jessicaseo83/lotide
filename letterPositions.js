const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  const lowerCase = sentence.toLowerCase()
  for (let i = 0; i < lowerCase.length; i++) {
    if (results[lowerCase[i]]) {
      results[lowerCase[i]].push(i);
    } else {
      results[lowerCase[i]] = [i];
    }
  }
  delete results[' '];
  return results;
};

// assertArraysEqual(letterPositions("hello").e, [1]);
module.exports = letterPositions;

console.log(letterPositions('hello'));
console.log(letterPositions('this is an array'));