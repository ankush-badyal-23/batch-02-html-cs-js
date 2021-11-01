import { BaseObject } from "./BaseObject.js";

export class Brick extends BaseObject {
    constructor(ctx, options) {
        super(ctx, options);
        this.score = options.score;
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
}