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
    return console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(`🚩🚩🚩 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  for (let i = 0; i < array.length; i++) {
    if (array.length <= 2) {
      return [];
    } else if (array.length % 2 === 1) {
      let center =  Math.floor(array.length / 2);
      let finalMiddle = [];
      finalMiddle.push(array[center]);
      return finalMiddle;
    } else {
      let center = [Math.round(array.length / 2 - 1), Math.round(array.length / 2)];
      let finalMiddle = [];
      finalMiddle.push(array[center[0]]);
      finalMiddle.push(array[center[1]]);
      return finalMiddle;
    }
  }
};

console.log(middle(["cow", "sheep", "duck", "horse"]));
console.log(middle(["cow", "duck", "horse"]));
console.log(middle(["cow", "sheep"]));

