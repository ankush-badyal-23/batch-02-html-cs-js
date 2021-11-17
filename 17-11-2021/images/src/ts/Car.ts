import { AnimatedSprite, Texture, Rectangle } from "pixi.js";
const carWidth = 66;
const carHeight = 66;
export const carFrames = {
    "down": [
        new Rectangle(0, 0, carWidth, carHeight),
        new Rectangle(carWidth, 0, carWidth, carHeight),
        new Rectangle(carWidth*2, 0, carWidth, carHeight),
        new Rectangle(carWidth*3, 0, carWidth, carHeight),
    ], 
    "left": [
        new Rectangle(0, carHeight, carWidth, carHeight),
        new Rectangle(carWidth, carHeight, carWidth, carHeight),
        new Rectangle(carWidth*2, carHeight, carWidth, carHeight),
        new Rectangle(carWidth*3, carHeight, carWidth, carHeight),
    ],
    "right": [
        new Rectangle(0, carHeight*2, carWidth, carHeight),
        new Rectangle(carWidth, carHeight*2, carWidth, carHeight),
        new Rectangle(carWidth*2, carHeight*2, carWidth, carHeight),
        new Rectangle(carWidth*3, carHeight*2, carWidth, carHeight),
    ],
    "up": [
        new Rectangle(0, carHeight*3, carWidth, carHeight),
        new Rectangle(carWidth, carHeight*3, carWidth, carHeight),
        new Rectangle(carWidth*2, carHeight*3, carWidth, carHeight),
        new Rectangle(carWidth*3, carHeight*3, carWidth, carHeight),
    ],
}
export class Car extends AnimatedSprite {

  constructor(textures:Texture[]) {
    super(textures);
    this.anchor.set(0.5);
    this.play();
    this.animationSpeed = 0.2;
  }
}
