export class BaseObject {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options;
    this.isAlive = true;
  }

  set alive(value) {
      this.isAlive = value;
  }

  get alive() {
      return this.isAlive;
  } 

  set x(value) {
      this.options.x = value;
  }

  get x() {
      return this.options.x;
  }

  get y() {
      return this.options.y;
  }

  get width() {
      return this.options.width;
  }

  update(delta) {}

  draw() {
    const { x, y, width: w, height: h, fill } = this.options;
    if (this.isAlive) {
      this.ctx.beginPath();
      this.ctx.fillStyle = fill;
      this.ctx.rect(x, y, w, h);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }
}
