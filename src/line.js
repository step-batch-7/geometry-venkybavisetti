const arePointsEqual = function(posA, posB) {
  return posA.x === posB.x && posA.y === posB.y;
};

const areTypeEqual = function(type1, type2) {
  return type1 instanceof Line && type2 instanceof Line;
};

class Line {
  constructor(posA, posB) {
    this.endA = posA;
    this.endB = posB;
  }

  isEqualTo(other) {
    return (
      areTypeEqual(this, other) &&
      arePointsEqual(this.endA, other.endA) &&
      arePointsEqual(this.endB, other.endB)
    );
  }

  toString() {
    return "Line (1,2)---(3,4)";
  }
}

module.exports = Line;
