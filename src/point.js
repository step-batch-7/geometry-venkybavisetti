const Line = require("./line.js");

const areTypeEqual = function(point) {
  return point instanceof Point;
};

const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    const point = `(${this.x},${this.y})`;
    return `[Point @${point}]`;
  }
  visit(functionCall) {
    const { x, y } = this;
    return functionCall(x, y);
  }
  isEqualTo(pointB) {
    return areTypeEqual(pointB) && arePointsEqual(this, pointB);
  }
  clone() {
    const { x, y } = this;
    return new Point(x, y);
  }
  findDistanceTo(point2) {
    if (!areTypeEqual(point2)) return NaN;
    const xAxisDifference = this.x - point2.x;
    const yAxisDifference = this.y - point2.y;
    return Math.sqrt(xAxisDifference ** 2 + yAxisDifference ** 2);
  }
}

module.exports = Point;
