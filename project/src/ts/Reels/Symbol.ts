import { Container, Sprite } from "pixi.js";
import { getTexture } from "../utils/Texture";
import reelConfig from "../../config/reelsConfig.json";
export class Symbol extends Container {
  private sprite: Sprite;
  private _isBlur: boolean;
  private _symbolTextureSet: string[];
  public get isBlur(): boolean {
    return this._isBlur;
  }
  public set isBlur(value: boolean) {
    this._isBlur = value;
  }
  constructor(public id: number, public symbolId: number | string) {
    super();
    this.name = `Sym-${id}`;
    this._symbolTextureSet = reelConfig.symbolsSet;
    this.sprite = new Sprite(this.getTexture(symbolId));
    this.sprite.anchor.set(0.5);
    this.addChild(this.sprite);
  }
  public set textureName(symbolId: number | string) {
    this.symbolId = symbolId;
    console.log(this._symbolTextureSet[Number(symbolId)]);
    this.sprite.texture = this.getTexture(symbolId);
  }
  public blur(value: boolean) {
    this.isBlur = value;
    this._symbolTextureSet = value
      ? reelConfig.symbolsBlurSet
      : reelConfig.symbolsSet;
    this.textureName = this.symbolId;
  }

  private getTexture(symbolId: number | string) {
    return getTexture(this._symbolTextureSet[Number(symbolId)]);
  }
}
