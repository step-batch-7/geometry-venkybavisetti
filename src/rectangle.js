const Line = require("./line.js");

const getAreaOfTriangle = function(pointA, pointB, pointC) {
  const [x1, y1] = [pointA.x, pointA.y];
  const [x2, y2] = [pointB.x, pointB.y];
  const [x3, y3] = [pointC.x, pointC.y];
  return 0.5 * Math.abs((y2 - y3) * (x1 - x2) - (y1 - y2) * (x2 - x3));
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
    const areaOfRectangle = this.area;
    const areaOfTriangles =
      getAreaOfTriangle(this.side1.endA, this.side1.endB, point) +
      getAreaOfTriangle(this.side1.endB, this.side3.endB, point) +
      getAreaOfTriangle(this.side3.endB, this.side3.endA, point) +
      getAreaOfTriangle(this.side1.endA, this.side3.endA, point);
    return !this.hasPoint(point) && areaOfRectangle == areaOfTriangles;
  }
}

module.exports = Rectangle;
