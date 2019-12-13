const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const areTypeEqual = function(otherType) {
  return otherType instanceof Line;
};

class Line {
  constructor(pointA, pointB) {
    this.endA = { x: pointA.x, y: pointA.y };
    this.endB = { x: pointB.x, y: pointB.y };
  }

  isEqualTo(other) {
    return (
      areTypeEqual(other) &&
      arePointsEqual(this.endA, other.endA) &&
      arePointsEqual(this.endB, other.endB)
    );
  }

  toString() {
    const endA = `${this.endA.x},${this.endA.y}`;
    const endB = `${this.endB.x},${this.endB.y}`;
    return `Line :(${endA})---(${endB})`;
  }

  get length() {
    const xAxisDifference = this.endB.x - this.endA.x;
    const yAxisDifference = this.endB.y - this.endA.y;
    return Math.sqrt(
      Math.pow(xAxisDifference, 2) + Math.pow(yAxisDifference, 2)
    );
  }
}

module.exports = Line;
