const Line = require("../src/line.js");
const Point = require("../src/point.js");
const { assert } = require("chai");

describe("Line", function() {
  describe("toString", function() {
    it("should represent line points in a string", function() {
      let a = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const expected = "[Line (1,2) to (3,4)]";
      const actual = a.toString();
      assert.strictEqual(actual, expected);
    });
  });

  describe("isEqualTo", function() {
    it("should validate when same lines are given and same type", function() {
      const expected = new Line({ x: 0, y: 0 }, { x: 2, y: 2 });
      const actual = new Line({ x: 0, y: 0 }, { x: 2, y: 2 });
      const result = actual.isEqualTo(expected);
      assert.ok(result);
    });
    it("should validate when same lines are given in reverse order and same type", function() {
      const expected = new Line({ x: 0, y: 0 }, { x: 2, y: 2 });
      const actual = new Line({ x: 2, y: 2 }, { x: 0, y: 0 });
      const result = actual.isEqualTo(expected);
      assert.ok(result);
    });
    it("should invalidate when different lines are given and same type", function() {
      const expected = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
      const actual = new Line({ x: 1, y: 3 }, { x: 1, y: 2 });
      const result = actual.isEqualTo(expected);
      assert.notOk(result);
    });
    it("should invalidate when same lines are given and different type", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
      const object = { endA: { x: 1, y: 2 }, endB: { x: 1, y: 2 } };
      const result = line.isEqualTo(object);
      assert.notOk(result);
    });
  });

  describe("length", function() {
    it("should give length of the given lineSegment", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 4 });
      assert.strictEqual(line.length, 2);
    });
    it("should give length in decimal value also", function() {
      const line = new Line({ x: 2, y: 2 }, { x: 1, y: 4 });
      assert.approximately(line.length, 2.5, 0.5);
    });
  });

  describe("isParallelTo", function() {
    it("should validate parallel lines", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 4 });
      const otherLine = new Line({ x: 2, y: 2 }, { x: 2, y: 4 });
      const result = line.isParallelTo(otherLine);
      assert.ok(result);
    });
    it("should invalidate parallel lines", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 1, y: 2 });
      const otherLine = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const result = line.isParallelTo(otherLine);
      assert.notOk(result);
    });
    it("should invalidate parallel lines when object is given", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 1, y: 2 });
      const otherLine = {
        endA: { x: 0, y: 0 },
        endB: { x: 1, y: 1 }
      };
      const result = line.isParallelTo(otherLine);
      assert.notOk(result);
    });
    it("should inValidate overLapping Lines", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 4, y: 0 });
      const otherLine = new Line({ x: 0, y: 0 }, { x: 1, y: 0 });
      const result = line.isParallelTo(otherLine);
      assert.notOk(result);
    });
    it("should validate parallel lines when slopes are infinity and -infinity", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 0, y: 4 });
      const otherLine = new Line({ x: 1, y: 0 }, { x: 1, y: -4 });
      const result = line.isParallelTo(otherLine);
      assert.ok(result);
    });
    it("should invalidate when two lines are overlapping and on y axis", function() {
      const line1 = new Line({ x: 0, y: 0 }, { x: 0, y: 5 });
      const line2 = new Line({ x: 0, y: 5 }, { x: 0, y: 10 });
      assert.isFalse(line1.isParallelTo(line2));
    });
    it("should invalidate when two lines are overlapping and parallel to y axis", function() {
      const line1 = new Line({ x: 2, y: 0 }, { x: 2, y: 5 });
      const line2 = new Line({ x: 2, y: 5 }, { x: 2, y: 10 });
      assert.isFalse(line1.isParallelTo(line2));
    });
  });

  describe("slope", function() {
    it("should get slope value of line", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      assert.strictEqual(line.slope, 1);
    });
    it("should get slope in negative", function() {
      const line = new Line({ x: 0, y: 5 }, { x: 1, y: 1 });
      assert.strictEqual(line.slope, -4);
    });
    it("should get slope as Infinity when it is parallel to y-axis", function() {
      const line = new Line({ x: 0, y: 5 }, { x: 0, y: 1 });
      assert.strictEqual(line.slope, -Infinity);
    });
  });

  describe("findY", function() {
    it("should get yAxis of the line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
      assert.strictEqual(line.findY(2), 2);
    });
    it("should get yAxis of the line as NaN when outside of the line segment", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
      assert.isNaN(line.findY(6));
    });
    it("should get yAxis of the line both xCoordinates values is same", function() {
      const line = new Line({ x: 4, y: 1 }, { x: 4, y: 5 });
      assert.strictEqual(line.findY(4), 1);
    });
    it("should get yAxis of the line both yCoordinates values is same", function() {
      const line = new Line({ x: 4, y: 2 }, { x: 6, y: 2 });
      assert.strictEqual(line.findY(5), 2);
    });
    it("should get yAxis when the slope is -Infinity", function() {
      const line = new Line({ x: 4, y: 5 }, { x: 4, y: 1 });
      assert.strictEqual(line.findY(4), 5);
    });
  });

  describe("findX", function() {
    it("should get xAxis of the line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
      assert.strictEqual(line.findX(3), 3);
    });
    it("should get xAxis of the line as NaN when outside of the line segment", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
      assert.isNaN(line.findX(6));
    });
    it("should get xAxis of the line when both xCoordinates values is same", function() {
      const line = new Line({ x: 4, y: 1 }, { x: 4, y: 5 });
      assert.strictEqual(line.findX(4), 4);
    });
    it("should get xAxis of the line both yCoordinates values is same", function() {
      const line = new Line({ x: 4, y: 2 }, { x: 6, y: 2 });
      assert.strictEqual(line.findX(2), 4);
    });
  });

  describe("hasPoint", function() {
    it("should validate point is present in the line", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      const p = new Point(2, 2);
      assert.ok(line.hasPoint(p));
    });
    it("should inValidate point is present in the line", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      const p = new Point(2, 3);
      assert.notOk(line.hasPoint(p));
    });
    it("should inValidate point when the point is created without the Point class", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      const p = { x: 2, y: 2 };
      assert.notOk(line.hasPoint(p));
    });
    it("should validate point when the point in the x-axis", function() {
      const line = new Line({ x: 1, y: 0 }, { x: 5, y: 0 });
      const p = new Point(2, 0);
      assert.ok(line.hasPoint(p));
    });
    it("should validate point when the point in the y-axis", function() {
      const line = new Line({ x: 0, y: 1 }, { x: 0, y: 5 });
      const p = new Point(0, 2);
      assert.ok(line.hasPoint(p));
    });
  });

  describe("split", function() {
    it("should get two equal lines from the split function", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      const firstLine = new Line({ x: 0, y: 0 }, { x: 2, y: 2 });
      const secondLine = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      assert.deepStrictEqual(line.split(), [firstLine, secondLine]);
    });
  });
  describe("findPointFromStart", function() {
    it("should get point in the line from starting of line with a given distance", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 5, y: 0 });
      assert.deepStrictEqual(line.findPointFromStart(2), { x: 2, y: 0 });
    });
    it("should get null when length of line segment is more than given num", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 5, y: 0 });
      assert.deepStrictEqual(line.findPointFromStart(6), null);
    });

    it("Should give null if given point is not a number", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
      assert.isNull(line.findPointFromStart("point"));
    });
  });
  describe("findPointFromEnd", function() {
    it("should get point in the line from starting of line with a given distance", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 5, y: 0 });
      assert.deepStrictEqual(line.findPointFromEnd(2), { x: 3, y: 0 });
    });
    it("should get null when length of line segment is more than given num", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 5, y: 0 });
      assert.deepStrictEqual(line.findPointFromEnd(6), null);
    });
    it("Should give null if given point is not a number", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
      assert.isNull(line.findPointFromEnd("point"));
    });
  });
});
