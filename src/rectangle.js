const Line = require("./line.js");

class Rectangle {
  constructor(diagonalPointA, diagonalPointB) {
    this.AB = new Line(diagonalPointA, {
      x: diagonalPointB.x,
      y: diagonalPointA.y
    });
    this.DA = new Line(diagonalPointA, {
      x: diagonalPointA.x,
      y: diagonalPointB.y
    });
  }
}
