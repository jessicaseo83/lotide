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
    console.log("Assertion Failed");
  } else if (eqArraysResult) {
    console.log("Assertion Passed");
  }
};