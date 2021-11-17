import { Application, Sprite, Rectangle, Text } from "pixi.js";
import { Loader } from "./ts/Loader";
import { Car, carFrames } from "./ts/Car";
import { Player } from "./ts/Player";
import { gsap } from "gsap";
window.addEventListener("load", () => {
  const app = new Application({
    width: 800,
    height: 600,
    antialias: true,
    resolution: 2,
    view: document.getElementById("my-canvas") as HTMLCanvasElement,
    backgroundColor: 0xa0a0a0,
    sharedLoader: true,
  });

  const loader = new Loader();
  let carA: Sprite;
  loader.start((loader, resources) => {
    carA = new Sprite(Loader.getTexture('A'));
    app.stage.addChild(carA);
    carA.x = 700;
    carA.y = 100;
    carA.anchor.set(0.5);
    carA.scale.set(0.2);
    gsap.to(carA, {
      x: 100,
      y: 100,
      duration: 2,
      ease: "power2.out",
    });
    console.log(resources.Cars);

    let cars = new Car(Loader.getTexturesFromSpritesheet('Cars', carFrames.up));
    app.stage.addChild(cars);
    cars.x = app.screen.width / 2;
    cars.y = app.screen.height / 2;
   
    let player = new Player('Character');
    app.stage.addChild(player);
    player.x = app.screen.width / 2;
    player.y = app.screen.height - player.height;
  });

  app.ticker.add((delta) => {
    // Do something every frame
    // if (carA) {
    //   carA.x -= delta * 2;
    // }
  });
});
