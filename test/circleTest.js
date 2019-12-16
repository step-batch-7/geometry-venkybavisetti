const { assert } = require("chai");
const Circle = require("../src/circle.js");

describe("Circle", function() {
  describe("toString", function() {
    it("should represent circle in a string", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const expected = "[Circle @(1,2) radius 5]";
      assert.strictEqual(circle.toString(), expected);
    });
  });
  describe("isEqualTo", function() {
    it("should validate when same  circles are given", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 5);
      const circle2 = new Circle({ x: 0, y: 0 }, 5);
      assert.ok(circle1.isEqualTo(circle2));
    });
  });
});
