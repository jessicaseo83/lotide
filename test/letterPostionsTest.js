const assert = require('chai').assert;
const letterpositions = require('../letterPositions');

describe('#letterPostion', () => {
  it (`return { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }' for 'hello'`, () => {
    assert.deepEqual(letterpositions('hello'), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });

  it (`return { t: [ 0 ],
    h: [ 1 ],
    i: [ 2, 5 ],
    s: [ 3, 6 ],
    a: [ 8, 11, 14 ],
    n: [ 9 ],
    r: [ 12, 13 ],
    y: [ 15 ] } for 'this is a string'`, () => {
      assert.deepEqual(letterpositions('this is an array'), { t: [ 0 ],
        h: [ 1 ],
        i: [ 2, 5 ],
        s: [ 3, 6 ],
        a: [ 8, 11, 14 ],
        n: [ 9 ],
        r: [ 12, 13 ],
        y: [ 15 ] })
    });


})