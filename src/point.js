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
}

module.exports = { Point };
