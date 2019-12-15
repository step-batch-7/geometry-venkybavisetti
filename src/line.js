const { Point } = require("./point.js");

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
    const areOverLapping =
      this.hasPoint(new Point(otherLine.endA.x, otherLine.endA.y)) ||
      this.hasPoint(new Point(otherLine.endB.x, otherLine.endB.y)) ||
      otherLine.hasPoint(new Point(this.endA.x, this.endA.y)) ||
      otherLine.hasPoint(new Point(this.endB.x, this.endB.y));
    return this.slope == otherLine.slope && !areOverLapping;
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
    return (
      point instanceof Point &&
      (this.findY(point.x) === point.y || this.findX(point.y) === point.x)
    );
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
