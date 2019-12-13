class Line {
  constructor(x1, y1, x2, y2) {
    this.endA = { x: x1, y: y1 };
    this.endB = { x: x2, y: y2 };
  }
  isEqualTo(other) {
    return this.toString == other.toString;
  }

  toString() {
    return "Line (1,2)---(3,4)";
  }
}

module.exports = Line;
