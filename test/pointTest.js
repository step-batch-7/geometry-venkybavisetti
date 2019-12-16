const { assert } = require("chai");
const Circle = require("../src/circle.js");
const Point = require("../src/point.js");
const Line = require("../src/line.js");

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
  describe("findDistanceTo", function() {
    it("should get distance between two points", function() {
      const point1 = new Point(0, 1);
      const point2 = new Point(5, 1);
      assert.strictEqual(point1.findDistanceTo(point2), 5);
    });
    it("should get NaN when point2 is object", function() {
      const point1 = new Point(0, 1);
      const point2 = { x: 5, y: 1 };
      assert.isNaN(point1.findDistanceTo(point2));
    });
  });
  describe("isOn", function() {
    it("should validate when given point is in line", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 5, y: 0 });
      const point = new Point(2, 0);
      assert.ok(point.isOn(line));
    });
    it("should determine true for the point on the circle for Circle is given", () => {
      const circle = new Circle({ x: 5, y: 5 }, 5);
      const point = new Point(8, 9);
      assert.isOk(point.isOn(circle));
    });
    it("should determine false for the point not on the circle for Circle is given", () => {
      const circle = new Circle({ x: 5, y: 5 }, 2);
      const point = new Point(5, 2);
      assert.isNotOk(point.isOn(circle));
    });
  });
});
