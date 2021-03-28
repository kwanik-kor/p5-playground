class Parallel {
  constructor(x, y, max, speed) {
    this.x = x;
    this.y = y;
    this.max = max;
    this.speed = speed;
    this.points = [];

    for (let i = 0; i < 1; i++) {
      this.points[i] = this.y;
    }
  }
  move() {
    let cur = this.points[0];
    if (cur > this.y + 70) {
      this.points.unshift(this.y);
    } else if (this.points[this.points.length - 1] > this.max) {
      this.points.pop();
    }
    for (let i = 0; i < this.points.length; i++) {
      this.points[i] += this.speed;
      strokeWeight(1);
      stroke(164, 39, 172);
      line(0, this.points[i], this.x, this.points[i]);
      gradient_1 = color(27, 73, 150);
      gradient_2 = color(35, 25, 67);
      setGradient(0, 0, width, height / 2, gradient_2, gradient_1);
    }
  }
}
