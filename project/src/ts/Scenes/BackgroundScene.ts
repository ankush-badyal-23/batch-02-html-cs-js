import { BaseView } from "./BaseView";
import { IDisplayConfig } from "./IDisplayConfig";

export class BackgroundScene extends BaseView {
  constructor(json: IDisplayConfig) {
    super(json);
  }

  public resize(centerX: number, centerY: number, scale: {minScale:number, maxScale:number}): void {
    // this.scale.set(scale.maxScale);
    Object.values(this._components).forEach((comp: any) => {
      comp.scale.set(scale.maxScale);
      if (comp.alignCenter) {
        comp.x = centerX;
        comp.y = centerY;
      }
    });
  }
}
