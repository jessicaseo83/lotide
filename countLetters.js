const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {
  let lowerCase = sentence.toLowerCase();
  let sentenceSplit = lowerCase.split("");
  sentenceSplit = sentenceSplit.filter(e => e !== " ");
  const result = {};
  for (let char of sentenceSplit) {
    if(result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
const result1 = countLetters("Lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["o"], 2);
assertEqual(result1["h"], 4);
