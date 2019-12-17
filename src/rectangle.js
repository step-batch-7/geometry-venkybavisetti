const Line = require("./line.js");

class Rectangle {
  constructor(diagonalPointA, diagonalPointB) {
    this.AB = new Line(diagonalPointA, {
      x: diagonalPointB.x,
      y: diagonalPointA.y
    });
    this.CD = new Line(
      {
        x: diagonalPointA.x,
        y: diagonalPointB.y
      },
      diagonalPointB
    );
  }
  toString() {
    const diagonalPointA = `(${this.AB.endA.x},${this.AB.endA.y})`;
    const diagonalPointB = `(${this.CD.endB.x},${this.CD.endB.y})`;
    return `[Rectangle ${diagonalPointA} to ${diagonalPointB}]`;
  }
  get area() {
    const length = this.AB.length;
    const breadth = this.CD.endA.findDistanceTo(this.AB.endA);
    return length * breadth;
  }
  get perimeter() {
    const length = this.AB.length;
    const breadth = this.CD.endA.findDistanceTo(this.AB.endA);
    return 2 * (length + breadth);
  }
  isEqualTo(otherRectangle) {
    return (
      this.AB.isEqualTo(otherRectangle.AB) &&
      this.CD.isEqualTo(otherRectangle.CD)
    );
  }
  hasPoint(point) {
    const BC = new Line(this.AB.endB, this.CD.endB);
    const DA = new Line(this.AB.endA, this.CD.endA);
    return (
      this.AB.hasPoint(point) ||
      this.CD.hasPoint(point) ||
      BC.hasPoint(point) ||
      DA.hasPoint(point)
    );
  }
}

module.exports = Rectangle;
