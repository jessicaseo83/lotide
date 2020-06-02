# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jessicaseo83/lotide`

**Require it:**

`const _ = require('@jessicaseo83/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(...)`: return a count of each of the letters in that sentence
* `countOnly(...)`: return counts for a specific subset of those items
* `eqArrays(...)`: compare two arrays if they are identical
* `eqObject(...)`: compare two objects if they are identical
* `findKey(...)`: return the first key for which the callback returns a truthy value
* `findKeyByValue(...)`: search for a key on an object where its value matches a given value
* `head(...)`: retrieve the first element from the array
* `index(...)`: description
* `letterPositions(...)`: eturn all the indices in the string where each character is found
* `map(...)`: return a new array based on the results of the callback function
* `middle(...)`: description
* `tail(...)`: retrieve every element except the head of the array
* `takeUntil(...)`: slice of the array with elements taken from the beginning until the callback provided returns a truthy value.
* `without(...)`: return a subset of a given array, removing unwanted elements



