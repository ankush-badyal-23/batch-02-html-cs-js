import { Rectangle } from "./display/Rectangle";
import { Circle } from "./display/Circle";
import { Line } from "./display/Line";
import { Point } from "./utils/Point";

export class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private drawCommand: "rect" | "circ" | "line";
  private isMouseDown: boolean = false;
  private snapShot: ImageData;
  private startPoint: Point;
  private endPoint: Point;
  constructor() {
    this.canvas = document.getElementById("my-canvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d");
  }

  public start(): void {
    window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
    this.canvas.addEventListener("mousedown", this.onMouseDown.bind(this));
    this.canvas.addEventListener("mouseup", this.onMouseUp.bind(this));
    const gameloop = () => {
      this.update();
      this.draw();
      requestAnimationFrame(gameloop);
    };
    gameloop();
  }

  protected update(): void {}

  protected draw(): void {
    this.restoreSnapshot();
    if (this.startPoint && this.endPoint) {
      switch (this.drawCommand) {
        case "line":
          const line = new Line(this.ctx);
          line.x = this.startPoint.x;
          line.y = this.startPoint.y;
          line.width = this.endPoint.distance(this.startPoint).x;
          line.height = this.endPoint.distance(this.startPoint).y;
          line.draw();
          break;
        case "rect":
          // this.drawRect();
          break;
        case "circ":
          // this.drawCircle();
          break;
      }
    }
  }

  protected onKeyUp(e: KeyboardEvent): void {
    switch (e.code) {
      case "KeyL":
        this.drawCommand = "line";
        break;
      case "KeyR":
        this.drawCommand = "rect";
        break;
      case "KeyC":
        this.drawCommand = "circ";
        break;
    }
  }

  protected onMouseDown(e: MouseEvent): void {
    this.canvas.onmousemove = this.onMouseMove.bind(this);
    this.saveSnapshot();
    this.startPoint = new Point(e.offsetX, e.offsetY);
  }
  protected onMouseMove(e: MouseEvent): void {
    this.endPoint = new Point(e.offsetX, e.offsetY);
  }
  protected onMouseUp(e: MouseEvent): void {
    this.restoreSnapshot();
    this.draw();
    this.canvas.onmousemove = null;
    this.endPoint = null;
    this.startPoint = null;
  }

  protected saveSnapshot(): void {
    this.snapShot = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }

  protected restoreSnapshot(): void {
    this.ctx.putImageData(this.snapShot, 0, 0);
  }
}
