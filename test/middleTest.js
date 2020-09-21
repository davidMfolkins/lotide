const assertArraysEqual = require("../assertArraysEqual")
const middle = require("../middle")


assertArraysEqual(middle(["cow", "sheep", "duck", "horse"]), ["sheep", "duck"]);
assertArraysEqual(middle(["cow", "duck", "horse"]), ["duck"]);
assertArraysEqual(middle(["cow", "sheep"]), []);