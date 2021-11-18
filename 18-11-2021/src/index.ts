import { Application, Sprite, Rectangle, Text } from "pixi.js";
import { Loader } from "./ts/Loader";
import { SolarSystem } from "./ts/SolarSystem";
import { Car, carFrames } from "./ts/Car";
import { Player } from "./ts/Player";
import { gsap } from "gsap";
window.addEventListener("load", () => {
  const app = new Application({
    width: 1200,
    height: 720,
    antialias: true,
    resolution: 2,
    view: document.getElementById("my-canvas") as HTMLCanvasElement,
    backgroundColor: 0xa0a0a0,
    sharedLoader: true,
  });

  const loader = new Loader();
  let solar: SolarSystem;
  loader.start((loader, resources) => {
    solar = new SolarSystem();
    solar.x = app.screen.width / 2;
    solar.y = app.screen.height / 2;
    solar.init();
    app.stage.addChild(solar);
  });

  app.ticker.add((delta) => {
    // Do something every frame
    // if (carA) {
    //   carA.x -= delta * 2;
    // }
    solar && solar.update(delta);

  });
});
