import { DisplayObject } from "./DisplayObject";

export class Line extends DisplayObject {
  update(): void {}
  draw(): void {
    this.ctx.beginPath();
    if(this.strokeColor) {
        this.ctx.strokeStyle = this.strokeColor;
    }
    if(this.strokeWidth) {
        this.ctx.lineWidth = this.strokeWidth;
    }
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(
      this.width * this.scale.x,
      this.height * this.scale.y
    );
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
