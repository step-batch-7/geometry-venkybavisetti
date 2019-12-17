const Line = require("./line.js");

const getAreaOfTriangle = function(pointA, pointB, pointC) {
  const [x1, y1] = [pointA.x, pointA.y];
  const [x2, y2] = [pointB.x, pointB.y];
  const [x3, y3] = [pointC.x, pointC.y];
  return Math.abs((1 / 2) * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)));
};

class Rectangle {
  constructor(diagonalEndA, diagonalEndB) {
    this.AB = new Line(diagonalEndA, {
      x: diagonalEndB.x,
      y: diagonalEndA.y
    });
    this.CD = new Line(
      {
        x: diagonalEndA.x,
        y: diagonalEndB.y
      },
      diagonalEndB
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
      (this.AB.isEqualTo(otherRectangle.AB) &&
        this.CD.isEqualTo(otherRectangle.CD)) ||
      (this.AB.isEqualTo(otherRectangle.CD) &&
        this.CD.isEqualTo(otherRectangle.AB))
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
  covers(point) {
    const areaOfRectangle = this.area;
    const areaOfTriangles =
      getAreaOfTriangle(this.AB.endA, this.AB.endB, point) +
      getAreaOfTriangle(this.AB.endB, this.CD.endB, point) +
      getAreaOfTriangle(this.CD.endB, this.CD.endA, point) +
      getAreaOfTriangle(this.AB.endA, this.CD.endA, point);
    return areaOfRectangle == areaOfTriangles;
  }
}

module.exports = Rectangle;
