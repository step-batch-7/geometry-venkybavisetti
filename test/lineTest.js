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
      const expected = new Line(1, 2, 3, 4);
      const actual = new Line(1, 2, 1, 4);
      const result = actual.isEqualTo(expected);
      assert.ok(result);
    });
    it.skip("should not be equal to other object", function() {
      const expected = new Line(1, 2, 3, 4);
      const actual = new Line(1, 2, 3, 3);
      const result = actual.isEqualTo(expected);
      console.log(result);
      assert.ok(!result);
    });
  });
});
