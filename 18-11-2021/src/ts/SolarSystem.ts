import { Container, Sprite, Rectangle } from "pixi.js";
import { Loader } from "./Loader";
const planets: { [key: string]: any } = {
  sun: {
    name: "Sun",
    radius: 695.7,
    distance: 0,
    speed: 0,
    color: 0xffff00,
    texture: "solar",
    textureFrame: new Rectangle(180, 60, 320, 310),
  },
  mercury: {
    name: "Mercury",
    radius: 2.44,
    distance: 58,
    speed: 47.89,
    color: 0xff0000,
    texture: "solar",
    textureFrame: new Rectangle(295, 490, 230, 210),
  },
  venus: {
    name: "Venus",
    radius: 6.052,
    distance: 108,
    speed: 35.02,
    color: 0x00ff00,
    texture: "solar",
    textureFrame: new Rectangle(535, 115, 180, 180),
  },
  earth: {
    name: "Earth",
    radius: 6.378,
    distance: 150,
    speed: 29.78,
    color: 0x0000ff,
    texture: "solar",
    textureFrame: new Rectangle(1130, 125, 180, 180),
  },
  mars: {
    name: "Mars",
    radius: 3.397,
    distance: 228,
    speed: 24.13,
    color: 0xff0000,
    texture: "solar",
    textureFrame: new Rectangle(835, 115, 190, 185),
  },
  jupiter: {
    name: "Jupiter",
    radius: 69.911,
    distance: 778,
    speed: 13.06,
    color: 0x00ff00,
    texture: "solar",
    textureFrame: new Rectangle(1340, 492, 195, 200),
  },
  saturn: {
    name: "Saturn",
    radius: 58.232,
    distance: 1433,
    speed: 9.69,
    color: 0x0000ff,
    texture: "solar",
    textureFrame: new Rectangle(610, 505, 300, 170),
  },
  uranus: {
    name: "Uranus",
    radius: 25.362,
    distance: 2872,
    speed: 6.81,
    color: 0xff0000,
    texture: "solar",
    textureFrame: new Rectangle(537, 114, 190, 200),
  },
  neptune: {
    name: "Neptune",
    radius: 24.622,
    distance: 4495,
    speed: 5.43,
    color: 0x00ff00,
    texture: "solar",
    textureFrame: new Rectangle(537, 114, 190, 200),
  },
  pluto: {
    name: "Pluto",
    radius: 1.187,
    distance: 5906,
    speed: 4.74,
    color: 0x0000ff,
    texture: "solar",
    textureFrame: new Rectangle(537, 114, 190, 200),
  },
};
export class SolarSystem extends Container {
  public init(): void {
    this.createPlanets();
  }

  public update(delta: number): void {
    for (const planet of this.children) {
      if (planet.name !== "Sun") {
        planet.rotation +=
          (planets[planet.name.toLowerCase()].speed * delta) / 1000;
        (<Container>planet).children[0].angle += delta;
      }
    }
  }

  private createPlanets(): void {
    for (const planet in planets) {
      const planetData = planets[planet];
      const planetSprite = this.createPlanet(planetData);
      this.addChild(planetSprite);
    }
  }

  private createPlanet(planetData: any): Container {
    const planet = new Container();
    planet.name = planetData.name;
    if (planetData.name !== "Sun") {
      planet.pivot.x = -(planetData.distance / 10 + 50);
    }
    const planetSprite = new Sprite(
      Loader.getTextureFromSpritesheet(
        planetData.texture,
        planetData.textureFrame
      )
    );
    planetSprite.anchor.set(0.5);
    // planetSprite.scale.set((planetData.radius * 0.25)/ planetSprite.width);
    planetSprite.scale.set(0.5);
    // planetSprite.tint = planetData.color;
    planet.addChild(planetSprite);
    return planet;
  }
}
