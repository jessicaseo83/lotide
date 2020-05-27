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

const without = function(sourceArray, itemToRemoveArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i]);
  }
  for (let j = 0; j < itemToRemoveArray.length; j++) {
    for (let k = 0; k < newArray.length; k++) {
      if (itemToRemoveArray[j] === newArray[k]) {
        newArray.splice(k, 1);
      }
    }
  }
  console.log(newArray);
};


without([1, 2, 3], [1]);// => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]);// => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);