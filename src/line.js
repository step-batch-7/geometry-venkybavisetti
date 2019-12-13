const arePointsEqual = function(posA, posB) {
  return posA.x === posB.x && posA.y === posB.y;
};

class Line {
  constructor(posA, posB) {
    this.endA = posA;
    this.endB = posB;
  }

  isEqualTo(other) {
    return (
      arePointsEqual(this.endA, other.endA) &&
      arePointsEqual(this.endB, other.endB)
    );
  }

  toString() {
    return "Line (1,2)---(3,4)";
  }
}

module.exports = Line;
