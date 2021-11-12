import { DisplayObject } from "./DisplayObject";

export class Circle extends DisplayObject {
  private _radius: number;
  public get radius(): number {
    return this._radius;
  }
  public set radius(value: number) {
    this._radius = value;
  }
  private _startAngle: number = 0;
  private _endAngle: number = Math.PI * 2;
  private _anticlockwise: boolean;
  public get anticlockwise(): boolean {
    return this._anticlockwise;
  }
  public set anticlockwise(value: boolean) {
    this._anticlockwise = value;
  }
  private _color: string;
  public get color(): string {
    return this._color;
  }
  public set color(value: string) {
    this._color = value;
  }

  public update(): void {}

  public draw(): void {
    this.ctx.beginPath();
    this.ctx.arc(
      this.x,
      this.y,
      this._radius,
      this._startAngle,
      this._endAngle,
      this._anticlockwise
    );
    if (this.color) {
      this.ctx.fillStyle = this._color;
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
