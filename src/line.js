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

  isEqualTo(otherLine) {
    return (
      areTypeEqual(this, otherLine) &&
      arePointsEqual(this.endA, otherLine.endA) &&
      arePointsEqual(this.endB, otherLine.endB)
    );
  }

  toString() {
    let result = `Line :(${this.endA.x},${this.endA.y})`;
    result += `---`;
    result += `(${this.endB.x},${this.endB.y})`;
    return result;
  }
}
module.exports = Line;
