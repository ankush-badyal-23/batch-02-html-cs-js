import { Container } from "@pixi/display";
import { Reel } from "./Reel";
import reelConfig from "../../config/reelsConfig.json";
export class Reels {
    private reels:Reel[] = [];
    constructor(private layer:Container) {
        this._create();
    }
    protected _create(): void {
        let {rows, cols, width, offsetX, offsetY} =reelConfig;
        for(let c = 0; c< cols; c++) {
            let reel = new Reel(c, rows);
            reel.x = c * width + offsetX;
            reel.y = offsetY;
            this.layer.addChild(reel);
            this.reels.push(reel);
        }
    }
}