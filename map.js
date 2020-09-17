const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return (`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return (`🚩🚩🚩 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  console.log(results);
  return results;
};


const cb = word => word[0];



console.log(assertArraysEqual(map(words, cb), [ 'g', 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(map(words, cb), [ 'g', 'c', 't', 'm' ]));


