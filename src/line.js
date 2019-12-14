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
    return Math.sqrt(xAxisDifference ** 2 + yAxisDifference ** 2);
  }

  isParallelTo(otherLine) {
    if (!otherLine instanceof Line) return false;
    return this.slope == otherLine.slope;
  }

  get slope() {
    const xAxisDifference = this.endB.x - this.endA.x;
    const yAxisDifference = this.endB.y - this.endA.y;
    return yAxisDifference / xAxisDifference;
  }
}

module.exports = Line;
