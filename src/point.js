const areTypeEqual = function(pointB) {
  return pointB instanceof Point;
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
}

module.exports = { Point };
