const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!



const eqObjects = function(object1, object2) {

  //check both arrays' key numbers
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  for (let key of Object.keys(object1)) {
    // if both key values type is array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // if two arrays don't have same length, no need to go further.
      if (object1[key].length !== object2[key].length) {
        return false;
      // if two arrays have the same length, use eqArrays to check if their elm[i] = elm2[i] 
      } else {
        eqArrays(object1[key], object2[key]);
      }
    // other keys
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
