import { BaseObject } from "./BaseObject.js";

export class Paddle extends BaseObject {
  constructor(ctx, options) {
    super(ctx, options);
    this.speed = 0;
  }
  hitTest(ball) {
    const { x: x, y: y, width: w, height: h } = this.options;
    const { x: bx, y: by, radius: r } = ball;
    if (bx >= x && bx <= x + w && by >= y && by <= y + h) {
      return true;
    } else {
      return false;
    }
  }
  move(direction) {
    this.speed = this.options.speed * direction;
  }
  update(delta) {
    const {
      x,
      speed,
      bounds: { left, right },
    } = this.options;
    if (x > left && x < right) {
      this.options.x = x + this.speed;
    } else {
      if (x <= left) {
        this.options.x = left + 1;
      } else {
        this.options.x = right - 1;
      }
    }
  }
}
