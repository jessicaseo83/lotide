const tail = function(array) {
  let newArray = [];
  let tailArray = array.slice(1);
  for (let i = 0; i < tailArray.length; i++) {
    newArray.push(tailArray[i]);
  }
  return newArray;
};

module.exports = tail;