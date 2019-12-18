const Line = require("./line.js");
const Point = require("./point.js");

const isNumInRange = function(range, number) {
  const [lowerLim, higherLim] = range.sort((num1, num2) => num1 - num2);
  return number > lowerLim && higherLim > number;
};

class Rectangle {
  constructor(diagonalEndA, diagonalEndB) {
    this.side1 = new Line(diagonalEndA, {
      x: diagonalEndB.x,
      y: diagonalEndA.y
    });
    this.side3 = new Line(
      { x: diagonalEndA.x, y: diagonalEndB.y },
      diagonalEndB
    );
  }

  toString() {
    const diagonalPointA = `(${this.side1.endA.x},${this.side1.endA.y})`;
    const diagonalPointB = `(${this.side3.endB.x},${this.side3.endB.y})`;
    return `[Rectangle ${diagonalPointA} to ${diagonalPointB}]`;
  }

  get area() {
    const length = this.side1.length;
    const breadth = this.side3.endA.findDistanceTo(this.side1.endA);
    return length * breadth;
  }

  get perimeter() {
    const length = this.side1.length;
    const breadth = this.side3.endA.findDistanceTo(this.side1.endA);
    return 2 * (length + breadth);
  }

  isEqualTo(otherRectangle) {
    return (
      (this.side1.isEqualTo(otherRectangle.side1) &&
        this.side3.isEqualTo(otherRectangle.side3)) ||
      (this.side1.isEqualTo(otherRectangle.side3) &&
        this.side3.isEqualTo(otherRectangle.side1))
    );
  }

  hasPoint(point) {
    const side2 = new Line(this.side1.endB, this.side3.endB);
    const side4 = new Line(this.side1.endA, this.side3.endA);
    return (
      this.side1.hasPoint(point) ||
      this.side3.hasPoint(point) ||
      side2.hasPoint(point) ||
      side4.hasPoint(point)
    );
  }

  covers(point) {
    return (
      point instanceof Point &&
      isNumInRange([this.side1.endA.x, this.side1.endB.x], point.x) &&
      isNumInRange([this.side1.endA.y, this.side3.endB.y], point.y)
    );
  }
}

module.exports = Rectangle;
