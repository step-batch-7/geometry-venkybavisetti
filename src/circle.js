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
    if (!areTypeEqual(otherCircle)) return false;
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
    return this.center.findDistanceTo(point) === this.radius;
  }
  moveTo(position) {
    return new Circle(position, this.radius);
  }
  covers(point) {
    const length = point.findDistanceTo(this.center);
    return length < this.radius;
  }
}

module.exports = Circle;
