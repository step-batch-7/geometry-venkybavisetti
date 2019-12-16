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
  describe("area", function() {
    it("should get area of a circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      assert.approximately(circle.area, 78.5, 0.25);
    });

    it("should give 0 as area if the circle radius is 0", function() {
      const circle = new Circle({ x: 1, y: 2 }, 0);
      assert.deepStrictEqual(circle.area, 0);
    });
  });
  describe("perimeter", function() {
    it("should get the perimeter of a circle ", function() {
      const circle = new Circle({ x: 1, y: 2 }, 3);
      const actualValue = Math.round(circle.perimeter);
      const expectedValue = 19;
      assert.strictEqual(actualValue, expectedValue);
    });

    it("should get 0 as perimeter if the circle perimeter is 0", function() {
      const circle = new Circle({ x: 1, y: 2 }, 0);
      assert.deepStrictEqual(circle.perimeter, 0);
    });
  });
});