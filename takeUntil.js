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


const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return array.slice(0, array.indexOf(item));
    }
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const testResults1 = (data1, x => x < 0);
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const testResults2 = (data2, x => x === ',');
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log(assertArraysEqual(takeUntil(data1, testResults1), [ 1, 2, 5, 7, 2 ]));
console.log(assertArraysEqual(takeUntil(data1, testResults1), [ 1, 2, 5, 7 ]));
console.log(assertArraysEqual(takeUntil(data2, testResults2), [ "I've", 'been', 'to', 'Hollywood' ]));
console.log(assertArraysEqual(takeUntil(data2, testResults2), [ 1, 2, 5, 7, 2 ]));


