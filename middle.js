const trueFalseArray = function(array1, array2) {
  let resultArray = [];
  for (let i = 0; i < array1.length; i ++) {

    if (array1[i] === array2[i]) {
      resultArray.push("true");
    } else if (array1[i] !== array2[i]) {
      resultArray.push("false");
    }
  }
  return resultArray;
};

const eqArrays = function(array1, array2) {
  const result = trueFalseArray(array1, array2);
  if (result.includes("false")) {
    return false;
  } else {
    return true;
  }
};

const assertArraysEqual = function(array1, array2) {
  const eqArraysResult = eqArrays(array1, array2);
  if (!eqArraysResult) {
    console.log("🛑🛑🛑Assertion Failed");
  } else if (eqArraysResult) {
    console.log("✅✅✅Assertion Passed");
  }
};

const middle = function(array) {
  const returnArray = [];
  const midIndex = Math.floor(array.length/2);

  if (array.length <= 2){
   
  } else if (array.length > 2 && array.length % 2 !== 0) {
    returnArray.push(array[midIndex]);
  } else if (array.length > 2 && array.length % 2 === 0) {
    returnArray.push(array[midIndex - 1], array[midIndex]);
  }
  return returnArray;
}
// TestCodes
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
