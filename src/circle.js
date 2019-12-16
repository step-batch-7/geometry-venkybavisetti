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
  get area() {
    return Math.PI * this.radius ** 2;
  }
  get perimeter() {
    return 2 * Math.PI * this.radius;
  }
  hasPoint(point) {
    return (
      point instanceof Point &&
      Math.sqrt(point.x ** 2 + point.y ** 2) === this.radius
    );
  }
}

module.exports = Circle;
