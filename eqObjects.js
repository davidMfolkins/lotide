const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  } else {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }   return true
  }
};


const eqObjects = function(object1, object2) { 
  if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false
   }

   for (const key in object1) {
      const value1 = object1[key]
      const value2 = object2[key]

    
      if (value1 !== value2) {
        if (Array.isArray(value1) && Array.isArray(value2)) {
          return eqArrays(value1, value2)
        } else {
          return false
        }
      } 
  };
  return true
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log("test1 true", eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log("test2 false", eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log("test3 true", eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log("test4 false", eqObjects(cd, cd2)); // => false