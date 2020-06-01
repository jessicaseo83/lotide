
const assertArraysEqual = require('../assertArraysEqual');

const testArray1 = [1, 2, 3];
const testArray2 = ["a", "b", "c", 1];

assertArraysEqual(testArray1, [1, 2, 3]);
assertArraysEqual(testArray2, ["a", "b", "c", 1]);
assertArraysEqual(testArray1, [1, 2]);

