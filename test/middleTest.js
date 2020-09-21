const assert = require('chai').assert;
const head   = require('../middle');

describe("#middle returns the middle elements of an array", () => {
  
  it("returns sheep, duck for [cow, sheep, duck, horse]", () => {
    assert.deepEqual(head(["cow", "sheep", "duck", "horse"]), ["sheep", "duck"]);
  });

  it("returns duck for [cow, duck, horse]", () => {
    assert.deepEqual(head(["cow", "duck", "horse"]), ["duck"]); 
  });

  it("returns [] for [cow, sheep]", () => {
    assert.deepEqual(head(["cow", "sheep"]), []);
  });

});