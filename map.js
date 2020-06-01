const eqArrays = function(array1, array2) {
  // if arrays' lengths are not same, no need to go further.
  if (array1.length !== array2.length) {
    return false;
  }
  // 두 어레이에서 같은 인덱스의 값이 같지 않으면, no need to go further.
  let result = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      result = false;
    }
  }
  return result;
};

const assertArraysEqual = function(array1, array2) {
  const eqArraysResult = eqArrays(array1, array2);
  if (!eqArraysResult) {
    console.log("🛑🛑🛑Assertion Failed");
  } else if (eqArraysResult) {
    console.log("✅✅✅Assertion Passed");
  }
};


const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
 }
  return results;
}

module.exports = map;
// const results1 = map(words, word => word[0]);
// const stringLength = map(words, (word) => word.length);
// console.log(results1);


// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(stringLength, [6, 7, 2, 5, 3]);
 


