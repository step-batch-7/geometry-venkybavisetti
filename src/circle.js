const Point = require("./point.js");

const areTypeEqual = function(circle2) {
  return circle2 instanceof Circle;
};

class Circle {
  constructor(center, radius) {
    this.center = new Point(center.x, center.y);
    this.radius = radius;
  }
  toString() {
    return `[Circle @(${this.center.x},${this.center.y}) radius ${this.radius}]`;
  }
  isEqualTo(otherCircle) {
    if (areTypeEqual(otherCircle)) false;
    return (
      this.center.isEqualTo(otherCircle.center) &&
      this.radius === otherCircle.radius
    );
  }
}

module.exports = Circle;
