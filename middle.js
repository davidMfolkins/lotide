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

module.exports = middle;



