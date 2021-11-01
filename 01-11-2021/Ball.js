import { BaseObject } from "./BaseObject.js";

export class Ball extends BaseObject {
  constructor(ctx, options) {
    super(ctx, options);
    this.speed = 0;
    this.active = false;
    this.hor_dir = 0;
    this.ver_dir = 0;
  }

  move() {
    if (this.active) {
      return;
    }
    this.active = true;
    this.speed = this.options.speed;
    this.hor_dir = Math.random() > 0.75 ? -1 : 1;
    this.ver_dir = -1;
  }

  bounce() {
    this.ver_dir = -1;
  }

  update(delta) {
    const {
      x,
      y,
      bounds: { left, right, bottom, top },
    } = this.options;
    if (this.active && this.alive) {
      if (x <= left || x >= right) {
        this.hor_dir *= -1;
      }
      if (y <= top) {
        this.ver_dir *= -1;
      }
      if (y >= bottom) {
        this.active = false;
      }
    }
    this.options.x = x + this.speed * this.hor_dir;
    this.options.y = y + this.speed * this.ver_dir;
  }

  draw() {
    const { x, y, radius: r, fill } = this.options;
    if (this.isAlive) {
      this.ctx.beginPath();
      this.ctx.fillStyle = fill;
      this.ctx.arc(x, y, r, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }
}
