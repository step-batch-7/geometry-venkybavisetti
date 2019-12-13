const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const areTypeEqual = function(otherType) {
  return otherType instanceof Line;
};

const getSlopeOfLine = function(pointA, pointB) {
  return (pointB.y - pointA.y) / (pointB.x - pointA.x);
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
  isParallelTo(otherLine) {
    const slopeOfLineAB = getSlopeOfLine(this.endA, this.endB);
    const slopeOfLineCD = getSlopeOfLine(otherLine.endA, otherLine.endB);
    return slopeOfLineAB && slopeOfLineCD;
  }
}

const a = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
const b = new Line({ x: 0, y: 1 }, { x: 1, y: 2 });
console.log(a.isParallelTo(b));
module.exports = Line;
