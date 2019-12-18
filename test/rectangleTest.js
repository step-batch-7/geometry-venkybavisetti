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
    it("should get area of rectangle when breadth is absent", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 4, y: 0 });
      const actual = rectangle.area;
      const expected = 0;
      assert.strictEqual(actual, expected);
    });
    it("should get area of rectangle when length is absent", function() {
      const rectangle = new Rectangle({ x: 1, y: 0 }, { x: 1, y: 2 });
      const actual = rectangle.area;
      const expected = 0;
      assert.strictEqual(actual, expected);
    });
    it("should get area of rectangle when rectangle is at Q3 and Q4", function() {
      const rectangle = new Rectangle({ x: -1, y: -1 }, { x: 2, y: -3 });
      const actual = rectangle.area;
      const expected = 6;
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
    it("should get perimeter of rectangle when breadth is absent", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 4, y: 0 });
      const actual = rectangle.perimeter;
      const expected = 8;
      assert.strictEqual(actual, expected);
    });
    it("should get perimeter of rectangle when length is absent", function() {
      const rectangle = new Rectangle({ x: 1, y: 0 }, { x: 1, y: 2 });
      const actual = rectangle.perimeter;
      const expected = 4;
      assert.strictEqual(actual, expected);
    });
    it("should get perimeter of rectangle when rectangle is at Q3 and Q4", function() {
      const rectangle = new Rectangle({ x: -1, y: -1 }, { x: 2, y: -3 });
      const actual = rectangle.perimeter;
      const expected = 10;
      assert.strictEqual(actual, expected);
    });
  });

  describe("isEqualTo", function() {
    it("should validate same rectangles is given", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const rectangle2 = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const actual = rectangle.isEqualTo(rectangle2);
      assert.ok(actual);
    });
    it("should validate same rectangles when diameters are oppositely given", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const rectangle2 = new Rectangle({ x: 0, y: 2 }, { x: 3, y: 0 });
      const actual = rectangle.isEqualTo(rectangle2);
      assert.ok(actual);
    });
    it("should validate same rectangles when diameters points are in opposite", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const rectangle2 = new Rectangle({ x: 3, y: 2 }, { x: 0, y: 0 });
      const actual = rectangle.isEqualTo(rectangle2);
      assert.ok(actual);
    });
    it("should validate same rectangles when diameters are oppositely given and points in opposite", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const rectangle2 = new Rectangle({ x: 3, y: 0 }, { x: 0, y: 2 });
      const actual = rectangle.isEqualTo(rectangle2);
      assert.ok(actual);
    });
    it("should inValidate different rectangles", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const rectangle2 = new Rectangle({ x: 0, y: 0 }, { x: 4, y: 2 });
      const actual = rectangle.isEqualTo(rectangle2);
      assert.notOk(actual);
    });
  });

  describe("hasPoint", function() {
    it("should validate when the point is on the side1 of a rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const point = new Point(2, 0);
      const actual = rectangle.hasPoint(point);
      assert.ok(actual);
    });
    it("should validate when the point is on the side2 of a rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const point = new Point(3, 1);
      const actual = rectangle.hasPoint(point);
      assert.ok(actual);
    });
    it("should validate when the point is on the side3 of a rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const point = new Point(2, 2);
      const actual = rectangle.hasPoint(point);
      assert.ok(actual);
    });
    it("should validate when the point is on the side4 of a rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const point = new Point(0, 1);
      const actual = rectangle.hasPoint(point);
      assert.ok(actual);
    });
    it("should validate when the point is on the edge points of a rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const point = new Point(0, 0);
      const actual = rectangle.hasPoint(point);
      assert.ok(actual);
    });
    it("should inValidate when the point is inside the rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const point = new Point(2, 1);
      const actual = rectangle.hasPoint(point);
      assert.notOk(actual);
    });
    it("should inValidate when the point is outside the rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const point = new Point(2, 5);
      const actual = rectangle.hasPoint(point);
      assert.notOk(actual);
    });
  });

  describe("covers", function() {
    it("should validate when the point is inside on the rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const point = new Point(1, 1);
      const actual = rectangle.covers(point);
      assert.ok(actual);
    });
    it("should inValidate when the point is on the rectangle sides", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const point = new Point(0, 1);
      const actual = rectangle.covers(point);
      assert.notOk(actual);
    });
    it("should inValidate when the point is outside the rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
      const point = new Point(1, 5);
      const actual = rectangle.covers(point);
      assert.notOk(actual);
    });
  });
});
