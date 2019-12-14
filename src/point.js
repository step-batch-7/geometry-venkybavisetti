class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    const point = `(${this.x},${this.y})`;
    return `[Point @${point}]`;
  }
}

module.exports = { Point };
