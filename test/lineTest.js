const Line = require("../src/line.js");
const assert = require("assert");

describe("Line", function() {
  it("should equal to other string", function() {
    let a = new Line(1, 2, 1, 4);
    const expected = "{pos1:[x1,y2],pos1:[x2,y2]}";
    const actual = a.toString();
    assert.strictEqual(actual, expected);
  });

  it("should equal to other object", function() {
    const expected = new Line(1, 2, 3, 4);
    const a = new Line(1, 2, 1, 4);
    const actual = a.isEqualTo(expected);
    assert.ok(actual);
  });
});
