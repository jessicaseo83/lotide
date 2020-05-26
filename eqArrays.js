const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const trueFalseArray = function (array1, array2){
  let resultArray =[];
    for (let i = 0 ; i < array1.length; i ++) {
  
      if (array1[i] === array2[i]) {
        resultArray.push("true");
      } 
      else if (array1[i] !== array2[i]) {
        resultArray.push("false");
      }
    }
    return resultArray ;
  }

const eqArrays = function (array1, array2) {
  const result = trueFalseArray(array1, array2)
  if (result.includes("false")) {
    return false;
  } else {
    return true;
  }
};


assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); 