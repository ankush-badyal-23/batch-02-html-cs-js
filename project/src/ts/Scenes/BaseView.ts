import {
  Container,
  Sprite,
  Text,
  TextStyle,
  BitmapText,
  IBitmapTextStyle,
  AnimatedSprite,
} from "pixi.js";
import { Spine } from "pixi-spine";
import {
  IComponentConfig,
  IDisplayConfig,
  TViewConfig,
} from "./IDisplayConfig";
import { getTexture, getTextures } from "../utils/Texture";
export class BaseView extends Container {
  protected _componentContructors: { [key: string]: any } = {
    image: this._createSprite.bind(this),
    text: this._createText.bind(this),
    bitmapText: this._createBitmapText.bind(this),
    animation: this._createAnimation.bind(this),
    spine: this._createSpine.bind(this),
    layer: this._createLayer.bind(this),
  };
  protected _components: {
    [key: string]:
      | Container
      | Sprite
      | Text
      | BitmapText
      | AnimatedSprite
      | Spine;
  } = {};
  protected _images: { [key: string]: Sprite } = {};
  protected _texts: { [key: string]: Text | BitmapText } = {};
  protected _animations: { [key: string]: AnimatedSprite } = {};
  protected _spines: { [key: string]: Spine } = {};
  protected _layers: { [key: string]: Container } = {};

  constructor(json: IDisplayConfig) {
    super();
    this.name = json.name;
    if (json.view) {
      this._create(json.view);
    }
    console.log(`View [${json.name}] created`, this);
  }

  public getImage(key: string): Sprite {
    return this._images[key];
  }

  public getText(key: string): Text | BitmapText {
    return this._texts[key];
  }

  public getAnimation(key: string): AnimatedSprite {
    return this._animations[key];
  }

  public getSpine(key: string): Spine {
    return this._spines[key];
  }

  public getLayer(key: string): Container {
    return this._layers[key];
  }

  public getComponent(
    key: string
  ): Container | Sprite | Text | BitmapText | AnimatedSprite | Spine {
    return this._components[key];
  }

  public getComponents(): {
    [key: string]:
      | Container
      | Sprite
      | Text
      | BitmapText
      | AnimatedSprite
      | Spine;
  } {
    return this._components;
  }

  public destroy(): void {
    for (let key in this._components) {
      this._components[key].destroy();
    }
    this._components = null;
    this._images = null;
    this._texts = null;
    this._animations = null;
    this._spines = null;
    this._layers = null;
  }

  public resize(centerX: number, centerY: number, scale: number): void {
    this.scale.set(scale);
    Object.keys(this._layers).forEach((key) => {
      let layer = this._layers[key];
      if ((<any>layer).alignCenter) {
        layer.x = centerX;
        layer.y = centerY;
      }
    });
  }

  protected _create(viewJson: TViewConfig, parent: Container = this): void {
    for (let key in viewJson) {
      let componentJson = viewJson[key];
      let component =
        this._componentContructors[componentJson.type](componentJson);
      component.name = component.name || key;
      component.x = componentJson.x ?? 0;
      component.y = componentJson.y ?? 0;
      component.scale.x = componentJson.scaleX ?? 1;
      component.scale.y = componentJson.scaleY ?? 1;
      component.rotation = componentJson.rotation ?? 0;
      component.alpha = componentJson.alpha ?? 1;
      component.visible = componentJson.visible ?? true;
      if (componentJson.width !== undefined) {
        component.width = componentJson.width;
      }
      if (componentJson.height !== undefined) {
        component.height = componentJson.height;
      }
      this._components[key] = component;
      parent.addChild(component);
    }
  }

  protected _createSprite(json: IComponentConfig): Sprite {
    let sprite = new Sprite(getTexture(json.texture));
    sprite.anchor.x = json.anchorX ?? 0;
    sprite.anchor.y = json.anchorY ?? 0;
    this._images[json.name] = sprite;
    return sprite;
  }

  protected _createText(json: IComponentConfig): Text {
    let textStyle = new TextStyle(json.style);
    let text = new Text(json.text, textStyle);
    text.anchor.x = json.anchorX ?? 0;
    text.anchor.y = json.anchorY ?? 0;
    this._texts[json.name] = text;
    return text;
  }

  protected _createBitmapText(json: IComponentConfig): BitmapText {
    let bitmapText = new BitmapText(json.text, <IBitmapTextStyle>json.style);
    bitmapText.anchor.x = json.anchorX ?? 0;
    bitmapText.anchor.y = json.anchorY ?? 0;
    this._texts[json.name] = bitmapText;
    return bitmapText;
  }

  protected _createAnimation(json: IComponentConfig): AnimatedSprite {
    let animation = new AnimatedSprite(getTextures(json.textures));
    animation.anchor.x = json.anchorX ?? 0;
    animation.anchor.y = json.anchorY ?? 0;
    animation.loop = json.loop;
    animation.animationSpeed = json.animationSpeed;
    this._animations[json.name] = animation;
    return animation;
  }

  protected _createSpine(json: IComponentConfig): Spine {
    let spine = new Spine(json.skeletonData);
    this._spines[json.name] = spine;
    return spine;
  }

  protected _createLayer(json: IComponentConfig): Container {
    let layer = new Container();
    layer.pivot.x = json.anchorX ?? 0;
    layer.pivot.y = json.anchorY ?? 0;
    (<any>layer).alignCenter = json.alignCenter ?? false;
    this._layers[json.name] = layer;
    if (json.children) {
      this._create(json.children, layer);
    }
    return layer;
  }
}
