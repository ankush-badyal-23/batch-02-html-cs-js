export class Lives {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options;
    this.lives = options.lives;
  }

  bonus() {
    this.lives++;
  }

  reduce() {
    this.lives--;
  }

  draw() {
    this.ctx.font = "30pt Arial";
    this.ctx.fillStyle = this.options.fill;
    this.ctx.textAlign = this.options.align;
    this.ctx.textBaseline = this.options.baseline;
    this.ctx.fillText(`Lives: ${this.lives}`, this.options.x, this.options.y);
  }
}
