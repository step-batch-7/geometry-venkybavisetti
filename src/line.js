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
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `[Line ${endA} to ${endB}]`;
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

  findY(xAxisPoint) {
    const x = xAxisPoint;
    const xMinInLine = Math.min(this.endA.x, this.endB.x);
    const xMaxInLine = Math.max(this.endA.x, this.endB.x);
    const isXOutOfLine = x < xMinInLine || xMaxInLine < x;
    if (isXOutOfLine) return NaN;
    if (this.endA.x == this.endB.x || this.endB.y == this.endA.y)
      return this.endA.y;
    const m = this.slope;
    const b = this.endA.y - m * this.endA.x;
    return m * x + b;
  }

  findX(yAxisPoint) {
    const y = yAxisPoint;
    const yMinInLine = Math.min(this.endA.y, this.endB.y);
    const yMaxInLine = Math.max(this.endA.y, this.endB.y);
    const isYOutOfLine = y < yMinInLine || yMaxInLine < y;
    if (isYOutOfLine) return NaN;
    if (this.endA.x == this.endB.x || this.endB.y == this.endA.y)
      return this.endA.x;
    const m = this.slope;
    const b = this.endA.y - m * this.endA.x;
    return (y - b) / m;
  }

  hasPoint(point) {
    return this.findY(point.x) === point.y;
  }

  split() {
    const { endA, endB } = this;
    const midPoint = {
      x: (endA.x + endB.x) / 2,
      y: (endA.y + endB.y) / 2
    };
    return [new Line(endA, midPoint), new Line(midPoint, endB)];
  }
}

module.exports = { Line };
