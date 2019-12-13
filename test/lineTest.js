const Line = require("../src/line.js");
const assert = require("assert");

describe("Line", function() {
  describe("toString", function() {
    it("should equal to other string", function() {
      let a = new Line(1, 2, 1, 4);
      const expected = "Line (1,2)---(3,4)";
      const actual = a.toString();
      assert.strictEqual(actual, expected);
    });
  });

  describe("isEqualTo", function() {
    it("should equal to other object", function() {
      const expected = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
      const actual = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
      const result = actual.isEqualTo(expected);
      assert.ok(result);
    });
    it("should not be equal to other object", function() {
      const expected = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
      const actual = new Line({ x: 1, y: 3 }, { x: 1, y: 2 });
      const result = actual.isEqualTo(expected);
      assert.ok(!result);
    });
  });
});
