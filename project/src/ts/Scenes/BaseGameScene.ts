import { Reels } from "../Reels/Reels";
import { BaseView } from "./BaseView";
import { IDisplayConfig } from "./IDisplayConfig";

export class BaseGameScene extends BaseView {
    private reelContainer: Reels;
    constructor(json: IDisplayConfig) {
        super(json);
        this.reelContainer = new Reels(this.getLayer("reels"));
        console.log(this.reelContainer);
    }
    public resize(centerX: number, centerY: number, scale: {minScale:number, maxScale:number}): void {
        super.resize(centerX, centerY, scale);
        let logo = this.getImage("logo");
        logo.x = centerX;
        console.log(logo.scale.x , scale.minScale, logo.scale.x * scale.minScale);
        logo.scale.x = logo.scale.x * scale.minScale;
        logo.scale.y = logo.scale.y * scale.minScale;
    }
}