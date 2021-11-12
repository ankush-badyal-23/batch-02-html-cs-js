import { DisplayObject } from "./DisplayObject";

export class Rectangle extends DisplayObject {
  private _color: string;
  public get color(): string {
    return this._color;
  }
  public set color(value: string) {
    this._color = value;
  }
  update(): void {}
  draw(): void {
    this.ctx.beginPath();
    this.ctx.rect(
      this.x,
      this.y,
      this.width * this.scale.x,
      this.height * this.scale.y
    );
    if (this.color) {
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    }
    if (this.strokeColor) {
      this.ctx.strokeStyle = this.strokeColor;
    }
    if (this.strokeWidth) {
      this.ctx.lineWidth = this.strokeWidth;
    }
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
