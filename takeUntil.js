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

const takeUntil = function(array, callback) {
  const resultArr = [];

  for(let item of array){
    if(!callback(item)){
      resultArr.push(item);
    } else if (callback(item)) {
      return resultArr;
    }
  }
  return resultArr;
}
module.exports = takeUntil;

// const map = function(array, callback) {
//   const results = [];
//   for (let item of array) {
//     results.push(callback(item));
//  }
//   return results;
// }
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0); // function(x) { return x < 0}
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


// //expected output
// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
