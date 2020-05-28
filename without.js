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