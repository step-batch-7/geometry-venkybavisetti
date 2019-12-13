const Line = require("../src/line.js");
const { assert } = require("chai");

describe("Line", function() {
  describe("toString", function() {
    it("should represent line points in a string", function() {
      let a = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const expected = "Line :(1,2)---(3,4)";
      const actual = a.toString();
      assert.strictEqual(actual, expected);
    });
  });

  describe("isEqualTo", function() {
    it("should validate when same lines are given and same type", function() {
      const expected = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
      const actual = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
      const result = actual.isEqualTo(expected);
      assert.ok(result);
    });
    it("should invalidate when different lines are given and same type", function() {
      const expected = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
      const actual = new Line({ x: 1, y: 3 }, { x: 1, y: 2 });
      const result = actual.isEqualTo(expected);
      assert.ok(!result);
    });
    it("should invalidate when same lines are given and different type", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
      const object = { endA: { x: 1, y: 2 }, endB: { x: 1, y: 2 } };
      const result = line.isEqualTo(object);
      assert.ok(!result);
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
      assert.ok(!result);
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
  });
});
