import { AnimatedSprite, Texture, Rectangle, LoaderResource } from "pixi.js";
import { Loader } from "./Loader";
const offsetX = 34;
const offsetY = 26;
const width = 96;
const height = 97;
const frames = {
  idle: [
    new Rectangle(offsetX, offsetY, width, height),
    new Rectangle(offsetX + width, offsetY, width, height),
    new Rectangle(offsetX + width * 2, offsetY, width, height),
    new Rectangle(offsetX + width * 3, offsetY, width, height),
    new Rectangle(offsetX + width * 4, offsetY, width, height),
    new Rectangle(offsetX, offsetY + height, width, height),
    new Rectangle(offsetX + width, offsetY + height, width, height),
    new Rectangle(offsetX + width * 2, offsetY + height, width, height),
    new Rectangle(offsetX + width * 3, offsetY + height, width, height),
    new Rectangle(offsetX + width * 4, offsetY + height, width, height),
  ],
};
export class Player extends AnimatedSprite {
  constructor(resourceId: string) {
    const textures = Loader.getTexturesFromSpritesheet(resourceId, frames.idle);
    super(textures);
    this.anchor.set(0.5);
    this.animationSpeed = 0.12;
    this.play();
  }
}
