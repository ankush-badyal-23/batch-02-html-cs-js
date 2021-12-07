import { Container, Sprite } from "pixi.js";
import { getTexture } from "../utils/Texture";

export class Symbol extends Container {
    private sprite: Sprite;
    constructor(public id: number, public texture: string) {
        super();
        this.name = `Sym-${id}`;
        this.sprite = new Sprite(getTexture(texture));
        this.sprite.anchor.set(0.5);
        this.addChild(this.sprite);
    }
    public set textureName(texture: string) {
        this.sprite.texture = getTexture(texture);
    }
}