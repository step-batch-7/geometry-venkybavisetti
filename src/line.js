class Line {
  constructor(x1, y1, x2, y2) {
    this.pos1 = [x1, y1];
    this.pos2 = [x2, y2];
  }
  isEqualTo(other) {
    return this.toString == other.toString;
  }

  toString() {
    return "{pos1:[x1,y2],pos1:[x2,y2]}";
  }
}

module.exports = Line;
