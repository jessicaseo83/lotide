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

module.exports = middle;
