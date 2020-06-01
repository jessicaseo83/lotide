const assert = require('chai').assert;

const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe('#tail', () => {

  it(`should return ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    const array = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(array), ["Lighthouse", "Labs"]); 
  });

  it('should return [2, 3, 4, 5, 6] for [1, 2, 3, 4, 5, 6]', () => {
    const array = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(tail(array), [2, 3, 4, 5, 6]);
  })
})
//Test Case: Check the original array

