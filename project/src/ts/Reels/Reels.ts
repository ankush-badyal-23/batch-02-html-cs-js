import { Container } from "@pixi/display";
import { Reel } from "./Reel";
import reelConfig from "../../config/reelsConfig.json";
import { Graphics } from "@pixi/graphics";
export class Reels {
  private reels: Reel[] = [];
  constructor(private layer: Container) {
    this._create();
  }
  protected _create(): void {
    let { rows, cols, width, offsetX, offsetY, padding, symbolHeight } =
      reelConfig;
    for (let c = 0; c < cols; c++) {
      let reel = new Reel(c, rows);
      reel.x = c * (width + padding) + offsetX;
      reel.y = offsetY;
      this.layer.addChild(reel);
      this.reels.push(reel);
    }
    this.drawMask(
      offsetX - width/2,
      -symbolHeight * 1.40,
      cols * (width + padding),
      rows * symbolHeight *0.95
    );
  }

  protected drawMask(x: number, y: number, w: number, h: number): void {
    let g = new Graphics();
    g.beginFill(0xffffff);
    g.drawRect(x, y, w, h);
    this.layer.addChild(g);
    this.layer.mask = g;
  }

  public spin(): void {
    setTimeout(() => {
      this.spinReel(0);
    }, 50);
  }

  protected spinReel(reelId: number): void {
    this.reels[reelId].spin();
    reelId++;
    if (reelId < this.reels.length) {
      setTimeout(() => {
        this.spinReel(reelId);
      }, 50 * reelId);
    } else {
      const stop = (stopId: number) => {
        this.reels[stopId].stop();
        stopId++;
        if (stopId < this.reels.length) {
          setTimeout(() => {
            stop(stopId);
          }, 50 * stopId);
        }
      };
      setTimeout(stop, 3500, 0);
    }
  }
}
