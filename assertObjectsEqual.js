const trueFalseArray = function(array1, array2) {
 

  for (let i = 0; i < array1.length; i ++) {
    let resultArray = [];
    if (array1[i] === array2[i]) {
      resultArray.push("true");
    } else if (array1[i] !== array2[i]) {
      resultArray.push("false");
    }
    return resultArray;
  }
 
};

const eqArrays = function(array1, array2) {
  const result = trueFalseArray(array1, array2);
  if (result.includes("false")) {
    return false;
  } else {
    return true;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (object1[key].length !== object2[key].length) {
        return false;
      } else {
        eqArrays(object1[key], object2[key]);
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }

  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  const eqObjectsResult = eqObjects(actual, expected);
  if(!eqObjectsResult) {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }

};
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2 }, { a: 2, b: '1', c: '7'});

