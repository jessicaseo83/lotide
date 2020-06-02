const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it ('return "drama" for (bestTVShowsByGenre, "The Wire")', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };    
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  })

  it (`return undefined for (bestTVShowsByGenre, "That '70s Show")`, () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };    
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  })

})