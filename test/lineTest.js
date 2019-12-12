const Line = require("../src/line.js");
const assert = require("assert");

describe("Line", function() {
  it("should equal to other", function() {
    let a = new Line(1, 2, 1, 4);
    const expected = "pos1:[x1,y2],pos1:[x2,y2]";
    const actual = a.toString();
    assert.strictEqual(actual, expected);
  });
});
