const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe ('#countOnly', () => {
  it ("return 1 for '[Jason]' ", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.strictEqual(result1["Jason"], 1);
  });

  it (`return undefined for result1["Karima"]`, () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.strictEqual(result1["Karima"], undefined)
  })

  it (`return 2 for result1["Fang"]`, () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.strictEqual(result1["Fang"], 2)
  })
})

