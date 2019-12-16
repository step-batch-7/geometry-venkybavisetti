const Point = require("./point.js");

const areTypeEqual = function(otherType) {
  return otherType instanceof Line;
};

const isNumOutOfRange = function(range, number) {
  const [lowerLim, higherLim] = range.sort((num1, num2) => num1 - num2);
  return number < lowerLim || higherLim < number;
};

const getRequireCoordinate = function(x1, x2, ratioOfDistance) {
  return (1 - ratioOfDistance) * x1 + ratioOfDistance * x2;
};

class Line {
  constructor(pointA, pointB) {
    this.endA = new Point(pointA.x, pointA.y);
    this.endB = new Point(pointB.x, pointB.y);
  }

  isEqualTo(other) {
    if (!areTypeEqual(other)) return false;
    return (
      (this.endA.isEqualTo(other.endA) && this.endB.isEqualTo(other.endB)) ||
      (this.endA.isEqualTo(other.endB) && this.endB.isEqualTo(other.endA))
    );
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `[Line ${endA} to ${endB}]`;
  }

  get length() {
    return this.endA.findDistanceTo(this.endB);
  }

  isParallelTo(otherLine) {
    if (!areTypeEqual(otherLine)) return false;
    const newLine = new Line(this.endB, otherLine.endA);
    const areCollinearPoints = this.slope === newLine.slope;
    return this.slope == otherLine.slope && !areCollinearPoints;
  }

  get slope() {
    const xAxisDifference = this.endB.x - this.endA.x;
    const yAxisDifference = this.endB.y - this.endA.y;
    return yAxisDifference / xAxisDifference;
  }

  findY(x) {
    const isXOutOfLine = isNumOutOfRange([this.endA.x, this.endB.x], x);
    if (isXOutOfLine) return NaN;
    if (this.endA.x == this.endB.x || this.endB.y == this.endA.y)
      return this.endA.y;
    const m = this.slope;
    const b = this.endA.y - m * this.endA.x;
    return m * x + b;
  }

  findX(y) {
    const isYOutOfLine = isNumOutOfRange([this.endA.y, this.endB.y], y);
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
  findPointFromStart(num) {
    const distance = this.length;
    if (distance < num || num < 0) return null;
    const ratioOfDistance = num / distance;
    return new Point(
      getRequireCoordinate(this.endA.x, this.endB.x, ratioOfDistance),
      getRequireCoordinate(this.endA.y, this.endB.y, ratioOfDistance)
    );
  }
  findPointFromEnd(num) {
    const distance = this.length;
    if (distance < num || num < 0) return null;
    const ratioOfDistance = num / distance;
    return new Point(
      getRequireCoordinate(this.endB.x, this.endA.x, ratioOfDistance),
      getRequireCoordinate(this.endB.y, this.endA.y, ratioOfDistance)
    );
  }
}

module.exports = Line;
