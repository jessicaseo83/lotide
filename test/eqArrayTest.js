const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe('#eqArray', () => {
  it (`return true for ([1, 2, 3], [1, 2, 3])`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  })

  it (`return false for ([1, 2, 3], [3, 2, 1])`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  })

  it (`return false for (["1", "2", "3"], ["1", "2", "3", "4"])`, () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
  })

  it (`return false for (["1", "2", "3"], ["1", "2", 3])`, () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  })

})
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);