const Rectangle = require("../src/rectangle.js");
const Point = require("../src/point.js");
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
  describe("area", function() {
    it("should get area of rectangle with happy path", function() {
      const rectangle = new Rectangle({ x: 0, y: 2 }, { x: 4, y: 0 });
      const actual = rectangle.area;
      const expected = 8;
      assert.strictEqual(actual, expected);
    });
  });
  describe("perimeter", function() {
    it("should get perimeter of rectangle with happy path", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const actual = rectangle.perimeter;
      const expected = 10;
      assert.strictEqual(actual, expected);
    });
  });
  describe("isEqualTo", function() {
    it("should validate same rectangle is given", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const rectangle2 = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const actual = rectangle.isEqualTo(rectangle2);
      assert.ok(actual);
    });
  });
  describe("hasPoint", function() {
    it("should validate when the point is on the rectangle lines", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const point = new Point(2, 0);
      const actual = rectangle.hasPoint(point);
      assert.ok(actual);
    });
  });
  describe("covers", function() {
    it("should validate when the point is inside on the rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const point = new Point(1, 1);
      const actual = rectangle.covers(point);
      assert.ok(actual);
    });
  });
});
