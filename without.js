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

const without = function(array, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!itemsToRemove.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
  return newArray;
};


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
