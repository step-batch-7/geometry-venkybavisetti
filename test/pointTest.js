const { assert } = require("chai");
const { Point } = require("../src/point.js");
describe("Point", function() {
  describe("constructor", function() {
    it("should get point of the given coordinates", function() {
      const point = new Point(1, 2);
      const anotherPoint = new Point(1, 2);
      assert.deepStrictEqual(point, anotherPoint);
    });
  });
  describe("toString", function() {
    it("should represent point in a string", function() {
      const point = new Point(1, 2);
      const expected = "[Point @(1,2)]";
      assert.strictEqual(point.toString(), expected);
    });
  });
  describe("visit", function() {
    it("should get result of the sum function", function() {
      const sum = function(x, y) {
        return x + y;
      };
      const point = new Point(1, 2);
      assert.strictEqual(point.visit(sum), 3);
    });
    it("should get result of the multiplication function", function() {
      const mul = function(x, y) {
        return x * y;
      };
      const point = new Point(2, 3);
      assert.strictEqual(point.visit(mul), 6);
    });
  });
  describe("isEqualTo", function() {
    it("should validate when same points are given", function() {
      const pointA = new Point(1, 2);
      const pointB = new Point(1, 2);
      assert.ok(pointA.isEqualTo(pointB));
    });
  });
  describe("clone", function() {
    it("should give the copy of the point", function() {
      const pointA = new Point(1, 2);
      const pointB = pointA.clone();
      assert.deepStrictEqual(pointA, pointB);
    });
  });
});