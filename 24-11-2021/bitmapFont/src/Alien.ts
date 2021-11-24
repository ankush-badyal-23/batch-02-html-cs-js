import { Sprite, Rectangle } from "pixi.js";
export class Alien extends Sprite {
  public direction: number;
  public turningSpeed: number;
  public speed: number;

  public updatePosition(): void {
    this.direction += this.turningSpeed * 0.01;
    this.x += Math.sin(this.direction) * this.speed;
    this.y += Math.cos(this.direction) * this.speed;
    this.rotation = -this.direction - Math.PI / 2;
  }

  public checkCollisionBounds(bounds:Rectangle): void {
    if (this.x < bounds.x) {
        this.x += bounds.width;
      } else if (this.x > bounds.x + bounds.width) {
        this.x -= bounds.width;
      }

      if (this.y < bounds.y) {
        this.y += bounds.height;
      } else if (this.y > bounds.y + bounds.height) {
        this.y -= bounds.height;
      }
  }
}
