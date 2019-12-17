const Rectangle = require("../src/rectangle.js");
const { assert } = require("chai");

describe("Rectangle", function() {
  describe("toString", function() {
    it("should represent rectangle diagonal in a string", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const actual = rectangle.toString();
      const expected = "[Rectangle (1,1) to (2,3)]";
      assert.strictEqual(actual, expected);
    });
  });
});
