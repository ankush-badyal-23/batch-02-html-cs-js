import { BaseView } from "./BaseView";
import { IDisplayConfig } from "./IDisplayConfig";

export class BackgroundScene extends BaseView {
  constructor(json: IDisplayConfig) {
    super(json);
  }
}
