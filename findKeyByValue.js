const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  let result = undefined;
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      result = key;
    }
  }
  return result;
};

// Test code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

module.exports = findKeyByValue;